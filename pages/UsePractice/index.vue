<script setup lang="ts"></script>
<template>
  <div class="inline-flex flex-col gap-5">
    <button data-aos="flip-up" class="border-2 px-8 py-4 rounded-xl">
      Button
    </button>
    <button data-aos="zoom-in" class="border-2 px-8 py-4 rounded-xl">
      Button
    </button>
    <!-- карточка с аватаркой и с тегами например #vue, и с небольшим текстом и с кнопками view -->
    <div class="flex gap-5 border-2 p-4 rounded-xl">
      <img
        src="/img/Code/frontend.jpg"
        alt="avatar"
        class="w-20 h-20 rounded-full"
      />
      <div class="flex flex-col gap-2">
        <span class="text-xl font-bold">Vue.js</span>
        <span class="text-sm text-gray-500">#vue</span>
        <p class="text-gray-300">
          Vue.js — это прогрессивный фреймворк для создания пользовательских
          интерфейсов.
        </p>
        <div class="flex flex-row-reverse gap-5 mt-5">
          <button class="border-2 px-8 py-2 rounded-xl">View</button>
          <button class="border-2 px-8 py-2 rounded-xl">Edit</button>
        </div>
      </div>
    </div>
    <!-- четыре кнопки в ряд с одинаковым текстом и с анимацией data-aos="fade-up" -->
    <div class="flex gap-5 *:w-full *:border-2 *:px-8 *:py-4 *:rounded-xl">
      <button data-aos="zoom-in" class="">Button</button>
      <button data-aos="flip-up" class="">Button</button>
      <button data-aos="fade-down" class="">Button</button>
      <button data-aos="zoom-out" class="">Button</button>
    </div>
  </div>
</template>
