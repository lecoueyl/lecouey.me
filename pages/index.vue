<template>
  <main class="u-overflow-hidden">
    <section class="o-container u-height-100 u-mb-x10 u-relative">
      <div class="o-grid u-height-100">
        <div class="o-grid__col u-7/12@sm">
          <Chat />
        </div>
      </div>
    </section>

    <!-- <section class="o-container u-pv-x10 u-mt-x10">
      <p class="u-8/12@sm o-type-l">
        If you don't want to chat, you can still view some of my selected works
      </p>
    </section>

    <section class="o-container u-pv-x10">
      <WorkHeader
        title="Deploy 360"
        role="Architecture, backend, sysadmin"
        category="DevOps"
        description="Architecture, tools, documentations, processes. Set the right ecosystem for companies to focus and improve their productivity."
      />

      <div class="u-text-center u-pv-x4">
        <div class="c-device-smartphone u-boxshadow-xl u-inline-block" />
      </div>
    </section>

    <section class="o-container u-pv-x10">
      <WorkHeader
        title="Deploy 360"
        role="Architecture, backend, sysadmin"
        category="DevOps"
        description="Architecture, tools, documentations, processes. Set the right ecosystem for companies to focus and improve their productivity."
      />

      <div class="u-text-center u-pv-x4">
        <div class="c-device-smartphone u-boxshadow-xl u-inline-block" />
      </div>
    </section> -->

    <!--
    <h1 class="o-type-m u-weight-normal u-pt-x10 u-text-center">
      Selected works
    </h1>

    <section class="o-container u-pv-x10 u-mt-x10">
      <work-header
        title="Shopping Assistant"
        role="UI/UX, Frontend, Strategy"
        category="Web app"
        description="Lead designer of a web widget that give the customer the conmfort to have a personal assistant when browsing an e-commerce website." />

      <div class="u-text-center u-pv-x4">
        <div class="c-device-smartphone u-boxshadow-xl u-inline-block">
          <work-shopping-assistant-widget />
        </div>
      </div>
    </section>

    <section class="o-container u-pv-x10 u-mt-x10">
      <work-header
        title="Deploy 360"
        role="Architecture, backend, sysadmin"
        category="DevOps"
        description="Architecture, tools, documentations, processes. Set the right ecosystem for companies to focus and improve their productivity." />

      <div class="u-text-center u-pv-x4">
        <div class="c-device-smartphone u-boxshadow-xl u-inline-block" />
      </div>
    </section>

    <section class="o-container u-pv-x10 u-mt-x10">
      <work-header
        title="Blueberry"
        role="Product manager"
        category="Design system"
        description="Architecture, tools, documentations, processes. Set the right ecosystem for companies to focus and improve their productivity." />

      <div class="u-text-center u-pv-x4">
        <div class="c-device-smartphone u-boxshadow-xl u-inline-block" />
      </div>
    </section> -->
  </main>
</template>


<script>
import anime from 'animejs';
import Chat from '~/components/chat';
// import WorkHeader from '~/components/work/header';

export default {
  head() {
    return {
      title: this.$t('index.title'),
    };
  },

  components: {
    Chat,
    // WorkHeader,
  },

  transition: {
    mode: 'out-in',
    css: false,

    leave(el, done) {
      anime({
        targets: el,
        translateY: [1, 0],
        duration: 1000,
        easing: 'linear',
        complete: done,
      });
    },
  },
};
</script>
