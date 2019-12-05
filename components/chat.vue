<template>
  <div class="app-chat u-pb-x4 o-type-m">
    <div class="app-chat__container u-12/12 u-relative">
      <TransitionCollapseY
        group
        tag="ul"
        class="o-list app-chat__thread u-absolute u-12/12"
      >
        <li
          v-for="(message, index) in chatThread"
          :key="index"
          :class="{
            'app-chat__message-container--author': !message.reply,
            'app-chat__message-container--reply': message.reply,
          }"
          class="o-list__item app-chat__message-container"
        >
          <div class="app-chat__message">
            <img
              v-if="message.action === 'gif'"
              src="../assets/images/cat-hello.gif"
            >

            <span v-if="message.content">
              <template
                v-if="message.reply"
                v-t="`chat.content.me.${message.content}`"
              >
                {{ $t(`chat.content.visitor.${message.content}`) }}
              </template>

              <template v-else>
                {{ $t(`chat.content.me.${message.content}`) }}
                <span
                  v-if="message.content === 'hi'"
                  class="o-anim-hi"
                >
                  👋
                </span>
              </template>
            </span>
          </div>
        </li>
      </TransitionCollapseY>
    </div>

    <div class="o-media u-pv-x2 u-mt-x4 u-text-center u-12/12 u-overflow-hidden">
      <div
        v-for="(answer, index) in replies"
        :key="index"
        class="app-chat__answer o-media__fluid u-ph@xs u-ph-x4@sm"
      >
        <button
          :class="{
            'c-button--is-active': !isSending,
          }"
          class="c-button c-button-outline c-button--secondary u-12/12 u-p"
          data-cursor="send"
          @click="sendAnswer(answer.id, index)"
        >
          {{ $t(`chat.replies.${answer.reply}`) }}
        </button>
      </div>

      <!-- Dummy element to simulate container height -->
      <div
        class="o-transition-hide-slideup o-media__fixed"
        style="visibility: hidden; width: 0;"
      >
        <div class="c-button c-button-outline c-button--secondary u-12/12 u-pv">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import gsap from 'gsap';
import { mapState } from 'vuex';
import audioSend from '~/assets/media/send.m4a';
import audioReceive from '~/assets/media/receive.m4a';
import { ease } from '~/components/transitions';
import TransitionCollapseY from '~/components/transitions/CollapseY';

const animeReplies = {
  targets: '.app-chat__answer',
  stagger: 0.2,
};

export default {
  components: {
    TransitionCollapseY,
  },

  data() {
    return {
      isSending: false,
      visitorReplied: null,
      sendDelay: 1000,
      history: [],
      replies: [],
      script: [
        {
          id: 0,
          content: 'hi',
          next: 1,
        },
        {
          id: 1,
          content: 'howAreYou',
          next: [2, 3],
        },
        {
          id: 2,
          reply: 'great',
          content: 'awesome',
          next: 4,
        },
        {
          id: 3,
          reply: 'meh',
          content: 'notGood',
          next: 5,
        },
        {
          id: 4,
          content: 'fantastic',
          next: 8,
        },
        {
          id: 5,
          content: 'oh',
          next: 6,
        },
        {
          id: 6,
          content: 'cheer',
          next: 7,
        },
        {
          id: 7,
          action: 'gif',
          next: [9],
        },
        {
          id: 8,
          content: 'leonard',
          next: [10, 11],
        },
        {
          id: 9,
          reply: 'thanks',
          content: 'thanks',
          next: 8,
        },
        {
          id: 10,
          reply: 'who',
          content: 'living',
          next: 14,
        },
        {
          id: 11,
          reply: 'iKnow',
          content: 'friends',
          next: 12,
        },
        {
          id: 12,
          content: 'bye',
          next: [13],
        },
        {
          id: 13,
          reply: 'bye',
          content: 'seeYou',
          next: [100],
        },
        {
          id: 14,
          content: 'profession',
          next: [15, 16],
        },
        {
          id: 15,
          reply: 'where',
          content: 'where',
          next: 17,
        },
        {
          id: 16,
          reply: 'andSo',
          content: 'boring',
          next: 18,
        },
        {
          id: 17,
          content: 'workplace',
          next: [100],
        },
        {
          id: 18,
          content: 'challenging',
          next: [100],
        },
      ],
    };
  },

  computed: mapState([
    'chatThread',
  ]),

  mounted() {
    // init chat thread
    const lastMessage = this.getLastMessage();

    if (lastMessage === undefined) {
      this.sendMessage();
    } else if (Array.isArray(lastMessage.next)) {
      this.setReplies();
    }
  },

  methods: {
    delaySend() {
      const randomDelay = Math.floor(Math.random() * 1000) + this.sendDelay;
      return new Promise((resolve) => setTimeout(resolve, randomDelay));
    },

    sendMessage(from) {
      this.isSending = true;
      const dialogue = this.getCurrentDialogue(from);
      let thread = Promise.resolve();
      dialogue.forEach((message) => {
        thread = thread.then(() => {
          // play the sound only when the user has interacted with the document first
          if (this.visitorReplied) this.playAudio('receive');

          // store current thread in store
          this.$store.commit('updateChatThread', message);
          return this.delaySend();
        });
      });
      thread.then(() => {
        this.setReplies();
      });
    },

    getCurrentDialogue(from = 0) {
      const dialogue = [];
      let message = this.getMessage(from);

      do {
        if (dialogue.length > 0) {
          const previousMessage = (this.history[this.history.length - 1]);
          message = this.getMessage(previousMessage.next);
        }
        this.history.push(message);
        dialogue.push(message);
      } while (!this.isNextAnswer(message));
      return dialogue;
    },

    isNextAnswer(message) {
      if (Array.isArray(message.next)) return true;
      return false;
    },

    getMessage(id) {
      return this.script.find((message) => message.id === id);
    },

    getLastMessage() {
      return this.chatThread[this.chatThread.length - 1];
    },

    setReplies() {
      const lastMessage = this.getLastMessage();
      if (this.isNextAnswer(lastMessage)) {
        this.replies = this.script.filter((message) => lastMessage.next.indexOf(message.id) > -1);
      }

      this.$nextTick(() => {
        this.isSending = false;
        gsap.fromTo(animeReplies.targets, {
          yPercent: 150,
        },
        {
          duration: 1,
          ease: ease.elastic,
          stagger: animeReplies.stagger,
          yPercent: 0,
        });
      });
    },

    sendAnswer(next, index) {
      this.visitorReplied = true;
      if (!this.isSending) {
        gsap.fromTo(animeReplies.targets, {
          yPercent: 0,
        },
        {
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: {
            amount: animeReplies.stagger,
            from: index,
            grid: 'auto',
          },
          yPercent: 150,
        });
        this.playAudio('send');
        this.sendMessage(next);
      }
    },

    playAudio(action) {
      const audio = new Audio();
      if (action === 'receive') {
        audio.src = audioReceive;
      } else {
        audio.src = audioSend;
      }
      audio.play();
    },
  },
};
</script>


<style lang="scss">
.app-chat {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-chat__container {
  overflow: hidden;
  flex: 1;
}

.app-chat__container::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 25%;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-image:
    linear-gradient(
      to bottom,
      $color-background 0%,
      rgba($color-background, 0.79) 8.1%,
      rgba($color-background, 0.761) 15.5%,
      rgba($color-background, 0.717) 22.5%,
      rgba($color-background, 0.66) 29%,
      rgba($color-background, 0.593) 35.3%,
      rgba($color-background, 0.518) 41.2%,
      rgba($color-background, 0.44) 47.1%,
      rgba($color-background, 0.36) 52.9%,
      rgba($color-background, 0.282) 58.8%,
      rgba($color-background, 0.207) 64.7%,
      rgba($color-background, 0.14) 71%,
      rgba($color-background, 0.083) 77.5%,
      rgba($color-background, 0.039) 84.5%,
      rgba($color-background, 0.01) 91.9%,
      transparent 100%
    );
}

.app-chat__thread {
  bottom: 0;
  left: 0;
}

.app-chat__message {
  max-width: 80%;
  display: inline-block;
}

.app-chat__message-container {
  will-change: opacity, transform;
  transition-property: opacity, transform;
  transition-duration: 0.4s;
  transition-timing-function: $anim-transition-timing-move;
  padding-top: $baseline;
  padding-bottom: $baseline;
}

.app-chat__message-container--author .app-chat__message {
  color: $color-foreground;
}

.app-chat__message-container--reply {
  text-align: right;
  margin-top: $baseline-x2;
  margin-bottom: $baseline-x2;

  & .app-chat__message {
    color: $color-accent-primary;
  }
}
</style>
