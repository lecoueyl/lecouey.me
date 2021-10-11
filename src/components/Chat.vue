<template>
  <div class="flex flex-col gap-10 h-full text-2xl">
    <div class="flex-grow relative">
      <TransitionTranslateY
        group
        tag="ul"
        class="absolute w-full right-0 left-0 bottom-0"
      >
        <li
          v-for="(message, index) in chatThread"
          :key="index"
          class="transition duration-150 ease-out"
          :class="{ 'py-10 text-primary text-right': message.reply }"
        >
          <div class="inline-block">
            <img
              v-if="message.action === 'cat-gif'"
              src="~assets/images/cat-hello.gif"
              alt="cat"
              class="rounded-xl"
            >

            <span v-if="message.content">
              <template v-if="message.reply">
                {{ $t(`chat.content.visitor.${message.content}`) }}
              </template>

              <template v-else>
                {{ $t(`chat.content.me.${message.content}`) }}
                <span
                  v-if="message.content === 'hi'"
                  class="animate-wave inline-block"
                >
                  👋
                </span>
              </template>
            </span>
          </div>
        </li>
      </TransitionTranslateY>
    </div>

    <div class="overflow-hidden pt-4 pb-8">
      <div class="flex text-center">
        <div
          v-for="(answer, index) in replies"
          :key="index"
          class="w-full px-4"
        >
          <button
            :class="{ 'c-button--is-active': !isSending }"
            class="c-chat__answer w-full rounded-full p-4 border-2 border-foreground"
            @click="sendAnswer(answer.id, index)"
          >
            {{ $t(`chat.replies.${answer.reply}`) }}
          </button>
        </div>

        <!-- Dummy element to simulate container height -->
        <div
          class="w-0 invisible"
          aria-hidden="true"
        >
          <div class="py-4 border-2">
            &#8203;
          </div>
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
import { ease } from '~/components/transition';

const animeReplies = {
  targets: '.c-chat__answer',
  stagger: 0.2,
};

export default {
  data: () => ({
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
        action: 'cat-gif',
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
        next: [19],
      },
      {
        id: 18,
        content: 'challenging',
        next: [15],
      },
      {
        id: 19,
        reply: 'bye',
        content: 'seeYou',
        next: 20,
      },
      {
        id: 20,
        content: 'bye',
        next: [100],
      },
    ],
  }),

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
      this.scrollTop();
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
        this.$emit('chatInitated');
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
          duration: 0.5,
          ease: ease.leave,
          stagger: {
            amount: animeReplies.stagger,
            from: index,
            grid: 'auto',
          },
          yPercent: 150,
        }).then(() => {
          this.playAudio('send');
          this.sendMessage(next);
        });
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

    scrollTop() {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0,
      });
    },
  },
};
</script>
