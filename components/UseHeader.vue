<template>
  <div class="fixed z-50 flex w-full top-4 lg:top-6 place-content-center">
    <div
      class="max-w-[1672px] px-6 w-full bg-black py-2 rounded-[14px] sm:mx-10 mx-5"
    >
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold">
          <a href="#" class="">@VueUse</a>
        </div>
        <ul class="hidden gap-5 md:flex lg:gap-11">
          <li><NuxtLink to="/">Home</NuxtLink></li>
        </ul>
        <div class="hidden gap-3 md:flex">
          <v-btn>Click</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
