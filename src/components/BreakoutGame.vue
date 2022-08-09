<template>
  <div
    ref="container"
    class="relative flex h-full items-center justify-center overflow-hidden focus:outline-none"
    tabindex="0"
    @keydown.enter="startGame()"
    @keydown.left="movePaddle('left')"
    @keydown.right="movePaddle('right')"
  >
    <p class="z-0 max-w-4xl origin-center p-4 text-3xl leading-normal lg:text-4xl lg:leading-normal">
      <transition-group
        v-if="splittedTex.length > 0"
        enter-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        @after-enter="onAfterEnterTransition"
      >
        <template v-for="word, key in splittedTex">
          <span
            v-if="inView"
            :key="key"
            :style="{ transitionDelay: `${key * transitionDelay}ms` }"
            class="inline-block"
            aria-hidden="true"
          >
            <span
              class="inline-block"
              aria-hidden="true"
              data-breakout="brick"
            >{{ word }}&nbsp;
            </span>
          </span>
        </template>
      </transition-group>
    </p>

    <div
      ref="paddle"
      class="absolute bottom-4 left-0 h-1.5 w-2/12 origin-left rounded-full bg-neutral-900 transition-transform ease-linear"
      :style="{ transform: `translateX(${ paddle.translateX }px)` }"
      @click="startGame()"
    />

    <div
      ref="ball"
      class="absolute top-0 left-0 aspect-square w-4"
      :style="{ transform: `translate(${ ball.translateX }px, ${ ball.translateY }px)` }"
      @click="startGame()"
    >
      <div
        class="h-full w-full rounded-full bg-neutral-900"
        :class="{ 'ball': !isPlaying }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transitionDelay: {
      type: Number,
      default: 50,
    },

    inView: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    animationFrameId: null,
    bricks: [],
    ball: {
      directionX: 0,
      directionY: 0,
      translateSpeed: null,
      translateX: 0,
      translateY: 0,
      height: null,
      width: null,
    },
    container: {
      height: null,
      width: null,
    },
    isPlaying: false,
    liveCount: 0,
    paddle: {
      translateSpeed: null,
      translateX: 0,
      width: null,
    },
    windowWidth: null,
  }),

  computed: {
    trimmedText() {
      if (!this.$slots.default) throw new Error('Default slot is required');

      return this.$slots.default()[0].children
        .trim()
        .replace(/\s\s+/g, ' ');
    },

    splittedTex() {
      return this.trimmedText.split(' ');
    },
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => this.setElements());
  },

  unmounted() {
    this.stopGame();
    window.removeEventListener('resize', this.onWindowResize);
    document.removeEventListener('mousemove', this.onMouseMove);
  },

  created() {
    window.addEventListener('resize', this.onWindowResize);
    document.addEventListener('mousemove', this.onMouseMove);
  },

  methods: {
    collides({
      x, y, height, width,
    } = {}) {
      return this.ball.translateX < x + width
         && this.ball.translateX + this.ball.width > x
         && this.ball.translateY < y + height
         && this.ball.translateY + this.ball.height > y;
    },

    setElements() {
      if (!this.$refs.container) return;

      if (this.liveCount === 0) {
        this.bricks = [].slice.call(this.$refs.container.querySelectorAll("[data-breakout='brick']"));
        this.liveCount = 3;
      }

      this.container.height = this.$refs.container.clientHeight;
      this.container.width = this.$refs.container.clientWidth;

      this.paddle.height = this.$refs.paddle.clientHeight;
      this.paddle.width = this.$refs.paddle.clientWidth;
      this.paddle.translateSpeed = this.paddle.width / 1.5;
      this.paddle.translateX = (this.container.width / 2) - this.paddle.width / 2;

      this.ball.height = this.$refs.ball.clientHeight;
      this.ball.width = this.$refs.ball.clientWidth;
      this.ball.translateSpeed = this.ball.width / 6;
      this.ball.translateX = (this.container.width / 2) - this.ball.width / 2;
      this.ball.translateY = this.$refs.paddle.offsetTop - this.ball.height;
      this.ball.directionX = 5;
      this.ball.directionX = this.ball.translateSpeed * (Math.random() * 2 - 1);
      this.ball.directionY = this.ball.translateSpeed * -1;
    },

    movePaddle(direction = 'right') {
      if (!this.isPlaying) return;

      if (direction === 'left') {
        this.paddle.translateX = this.paddle.translateX < this.paddle.translateSpeed
          ? 0
          : this.paddle.translateX - this.paddle.translateSpeed;
      } else if (direction === 'right') {
        const containerBoundary = this.container.width - this.paddle.width;
        this.paddle.translateX = this.paddle.translateX >= containerBoundary - this.paddle.translateSpeed
          ? containerBoundary
          : this.paddle.translateX + this.paddle.translateSpeed;
      }
    },

    startGame() {
      this.stopGame();
      this.animationFrameId = window.requestAnimationFrame(this.moveBall);
      this.isPlaying = true;
    },

    stopGame() {
      this.isPlaying = false;
      this.setElements();
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    },

    finishGame() {
      this.liveCount = 0;
      this.stopGame();
      this.bricks.forEach((brick, index) => {
        this.bricks[index].style.visibility = null;
      });
    },

    moveBall() {
      if (this.bricks.length === 0) {
        this.finishGame();
        return;
      }

      const isBallHittingTop = this.ball.translateY < 0;
      const isBallHittingRight = this.ball.translateX > (this.container.width - this.ball.width);
      const isBallHittingBottom = this.ball.translateY > this.container.height;
      const isBallHittingLeft = this.ball.translateX < 0;
      const isBallHittingPaddle = this.collides({
        x: this.paddle.translateX,
        y: this.$refs.paddle.offsetTop,
        height: this.paddle.height,
        width: this.paddle.width,
      });

      if (isBallHittingTop || isBallHittingPaddle) this.ball.directionY *= -1;
      if (isBallHittingLeft || isBallHittingRight) this.ball.directionX *= -1;
      if (isBallHittingBottom) {
        this.liveCount -= 1;
        this.stopGame();
        return;
      }

      this.bricks.forEach((brick, index) => {
        const brickOffsets = {
          x: brick.offsetLeft,
          y: brick.offsetTop,
          height: brick.offsetHeight,
          width: brick.offsetWidth,
        };

        if (this.collides(brickOffsets)) {
          this.bricks[index].style.visibility = 'hidden';
          this.bricks.splice(index, 1);

          if (this.ball.translateY + this.ball.height - this.ball.speed <= brickOffsets.y
             || this.ball.translateY >= brickOffsets.y + brickOffsets.height - this.ball.translateSpeed) {
            this.ball.directionY *= -1;
          } else {
            this.ball.directionX *= -1;
          }
        }
      });

      this.ball.translateX += this.ball.directionX;
      this.ball.translateY += this.ball.directionY;

      this.animationFrameId = window.requestAnimationFrame(this.moveBall);
    },

    onAfterEnterTransition(el) {
      const element = el;
      element.style.transitionDelay = null;
    },

    onMouseMove(event) {
      if (!this.isPlaying) return;

      const relativeX = event.clientX - this.$refs.container.offsetLeft;
      if (relativeX > this.paddle.width / 2 && relativeX < this.container.width - this.paddle.width / 2) {
        this.paddle.translateX = relativeX - this.paddle.width / 2;
      }
    },

    onWindowResize() {
      if (this.windowWidth === window.innerWidth) return;

      this.stopGame();
      this.setElements();
    },
  },
};
</script>

<style scoped>
.ball {
  animation: ball 5000ms cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}

@keyframes ball {
  0% {
    transform: translateY(0);
  }

  3% {
    transform: translateY(-1.2rem) scaleY(1.1);
  }

  6% {
    transform: translateY(-1.2rem);
  }

  9% {
    transform: translateY(-1.2rem) scaleY(1.1);
  }

  10% {
    transform: translateY(0) scaleY(0.9);
  }

  15% {
    transform: translateY(-0.7rem) scaleY(1.05);
  }

  20% {
    transform: translateY(0);
  }
}
</style>
