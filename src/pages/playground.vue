<template>
  <div class="container py-24">
    <div class="h-screen" />
    <div class="grid grid-cols-3 gap-10">
      <TransitionReveal tag="p" class="col-start-2">
        <span class="pl-16">For over 15 years, we've</span>
        <span>been dedicated to the details,</span>
        <span>thoughtful design and copy, and an</span>
        <span>ongoing curiosity for ideas that</span>
        <span>spark discussion. Because brands</span>
        <span>and communities aren't built on</span>
        <span>content, but moments that engage.</span>
      </TransitionReveal>

      <TransitionReveal tag="p">
        <span class="pl-16">For over 15 years, we've</span>
        <span>been dedicated to the details,</span>
        <span>thoughtful design and copy, and an</span>
        <span>ongoing curiosity for ideas that</span>
        <span>spark discussion. Because brands</span>
        <span>and communities aren't built on</span>
        <span>content, but moments that engage.</span>
      </TransitionReveal>
    </div>
    <div class="grid gap-4">
      <div class="animate-translate-x-1 size-20 rounded-full bg-neutral-600">
        1
      </div>
      <div class="animate-translate-x-2 size-20 rounded-full bg-neutral-600">
        2
      </div>
      <div class="animate-translate-x-3 size-20 rounded-full bg-neutral-600">
        3
      </div>
      <div class="animate-translate-x-4 size-20 rounded-full bg-neutral-600">
        4
      </div>
      <div class="animate-translate-x-5 size-20 rounded-full bg-neutral-600">
        5
      </div>
      <div class="animate-translate-x-6 size-20 rounded-full bg-neutral-600">
        6
      </div>
      <div class="animate-translate-x-7 size-20 rounded-full bg-neutral-600">
        7
      </div>
      <div class="animate-translate-x-8 size-20 rounded-full bg-neutral-600">
        8
      </div>
      <div class="animate-translate-x-9 size-20 rounded-full bg-neutral-600">
        9
      </div>
      <div class="animate-translate-x-10 size-20 rounded-full bg-neutral-600">
        10
      </div>
      <div class="animate-translate-x-11 size-20 rounded-full bg-neutral-600">
        11
      </div>
      <div class="animate-translate-x-12 size-20 rounded-full bg-neutral-600">
        12
      </div>
      <div class="animate-translate-x-13 size-20 rounded-full bg-neutral-600">
        13
      </div>
      <div class="animate-translate-x-14 size-20 rounded-full bg-neutral-600">
        14
      </div>
      <div class="animate-translate-x-15 size-20 rounded-full bg-neutral-600">
        15
      </div>
      <div class="animate-translate-x-16 size-20 rounded-full bg-neutral-600">
        16
      </div>
      <div class="animate-translate-x-17 size-20 rounded-full bg-neutral-600">
        17
      </div>
      <div class="animate-translate-x-18 size-20 rounded-full bg-neutral-600">
        18
      </div>
      <div class="animate-translate-x-19 size-20 rounded-full bg-neutral-600">
        19
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes translateX {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(50vw);
  }
  100% {
    transform: translateX(00%);
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Custom animation classes */
.animate-translate-x-1 {
  animation: translateX 5s cubic-bezier(.65, 1, .9, 1) infinite;
}

.animate-translate-x-2 {
  animation: translateX 5s cubic-bezier(.5, 1, .89, 1) infinite;
}

.animate-translate-x-3 {
  animation: translateX 5s cubic-bezier(.33, 1, .68, 1) infinite;
}

.animate-translate-x-4 {
  animation: translateX 5s cubic-bezier(.25, 1, .5, 1) infinite;
}

.animate-translate-x-5 {
  animation: translateX 5s cubic-bezier(.22, 1, .36, 1) infinite;
}

.animate-translate-x-6 {
  animation: translateX 5s cubic-bezier(.19, 1, .22, 1) infinite;
}

.animate-translate-x-7 {
  animation: translateX 5s cubic-bezier(.37, 0, .63, 1) infinite;
}

.animate-translate-x-8 {
  animation: translateX 5s cubic-bezier(.45, 0, .55, 1) infinite;
}

.animate-translate-x-9 {
  animation: translateX 5s cubic-bezier(.48, 0, .52, 1) infinite;
}

.animate-translate-x-10 {
  animation: translateX 5s cubic-bezier(.65, 0, .35, 1) infinite;
}

.animate-translate-x-11 {
  animation: translateX 5s cubic-bezier(.76, 0, .24, 1) infinite;
}

.animate-translate-x-12 {
  animation: translateX 5s cubic-bezier(.83, 0, .17, 1) infinite;
}

.animate-translate-x-13 {
  animation: translateX 5s cubic-bezier(.87, 0, .13, 1) infinite;
}

.animate-translate-x-14 {
  animation: translateX 5s cubic-bezier(.12, 0, .39, 0) infinite;
}

.animate-translate-x-15 {
  animation: translateX 5s cubic-bezier(.11, 0, .5, 0) infinite;
}

.animate-translate-x-16 {
  animation: translateX 5s cubic-bezier(.32, 0, .67, 0) infinite;
}

.animate-translate-x-17 {
  animation: translateX 5s cubic-bezier(.5, 0, .75, 0) infinite;
}

.animate-translate-x-18 {
  animation: translateX 5s cubic-bezier(.64, 0, .78, 0) infinite;
}

.animate-translate-x-19 {
  animation: translateX 5s cubic-bezier(.7, 0, .84, 0) infinite;
}
</style>
