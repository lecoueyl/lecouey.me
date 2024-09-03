<template>
  <div>
    <LayoutHeader />

    <div class="container flex h-[calc(100vh-theme(space.16))] items-end bg-neutral-100 pb-10 text-9xl">
      <TransitionReveal>
        <span>About</span>
      </TransitionReveal>
    </div>

    <div class="container grid grid-cols-3 gap-6 bg-neutral-100 py-48">
      <TransitionReveal tag="p" class="col-start-2">
        <span class="pl-12">Watson is founded in the</span>
        <span>belief that exceptional work starts</span>
        <span>with craft and conversation. We</span>
        <span>strive to break the conventions of</span>
        <span>the industry, our tools, and our</span>
        <span>platforms for our work to be more</span>
        <span>noticed, valued, and discussed.</span>
      </TransitionReveal>

      <TransitionReveal tag="p">
        <span class="pl-12">For over 15 years, we've</span>
        <span>been dedicated to the details,</span>
        <span>thoughtful design and copy, and an</span>
        <span>ongoing curiosity for ideas that</span>
        <span>spark discussion. Because brands</span>
        <span>and communities aren't built on</span>
        <span>content, but moments that engage.</span>
      </TransitionReveal>
    </div>

    <Table
      :data="[
        { name: 'John Doe', age: 30, location: 'New York' },
        { name: 'Jane Smith', age: 25, location: 'Los Angeles' },
        { name: 'Alice Johnson', age: 35, location: 'Chicago' },
        { name: 'Michael Brown', age: 28, location: 'San Francisco' },
      ]"
      class="container bg-neutral-100 pb-20"
    />

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About',
});
</script>
