<template>
  <div class="app-sa u-relative u-text-left">
    <div
      ref="launcher"
      class="app-sa-launcher u-absolute"
      @click="toggle()"
    />

    <div
      ref="main"
      :class="{
        'app-sa-main--is-active': isActive,
      }"
      class="app-sa-main u-absolute u-boxshadow-l"
    >
      <section>
        <h1 class="o-type-m u-p-x2">
          For you
        </h1>

        <ul class="app-sa-main__items">
          <li
            v-for="i in 10"
            :key="i"
            class="app-sa-main__item"
          >
            <figure class="app-sa-main__item-cover" />
            <small class="o-type-xxs u-color-grey">
              Yellow outfit
            </small>
            <p class="o-type-s">
              120$
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h1 class="o-type-m u-p-x2">
          Recent price down
        </h1>

        <ul class="app-sa-main__items">
          <li
            v-for="i in 10"
            :key="i"
            class="app-sa-main__item"
          >
            <figure class="app-sa-main__item-cover" />
            <small class="o-type-xxs u-color-grey">
              Yellow outfit
            </small>
            <p class="o-type-s">
              120$
            </p>
          </li>
        </ul>
      </section>

      <ul class="app-sa-nav u-absolute u-boxshadow-l">
        <li
          v-for="i in 4"
          :key="i"
          class="app-sa-nav__item o-type-xxs"
        >
          Test
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>


<style lang="scss">
.app-sa {
  height: 100%;
  width: 100%;
}

.app-sa-launcher {
  height: 3em;
  width: 3em;
  bottom: 2em;
  right: 1em;
  background-image: linear-gradient(-129deg, #FE814E 0%, #EE1C77 100%);
  border-radius: 50%;
  overflow: hidden;
  z-index: 100;
}

.app-sa-main {
  height: 80%;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
  transform: translateY(110%);
  will-change: transform;
  transition-property: transform;
  transition-duration: 0.6s;
  transition-timing-function: $anim-transition-timing-move;
}

.app-sa-main--is-active {
  transform: translateY(0);
}


.app-sa-nav {
  display: table;
  height: 4em;
  width: 100%;
  bottom: 0;
  z-index: 20;
  background-color: white;
}

.app-sa-nav__item {
  position: relative;
  display: table-cell;
  width: 1%;
  text-align: center;
  text-transform: uppercase;
}

.app-sa-main__items {
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  z-index: 1;
}
.app-sa-main__items::-webkit-scrollbar {
  display: none;
}

.app-sa-main__item {
  display: inline-block;
}

.app-sa-main__item {
  padding-right: $baseline-x2;
}

.app-sa-main__item:first-child {
  padding-left: $baseline-x2;
}

.app-sa-main__item-cover {
  width: 7em;
  height: 7em;
  background: red;
  border-radius: 2px;
}
</style>
