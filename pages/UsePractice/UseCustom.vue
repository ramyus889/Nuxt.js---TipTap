<!-- Timer.vue -->
<template>
  <div class="p-4">
    <h1 class="text-2xl">Таймер</h1>
    <p class="text-xl">Время: {{ time }} секунд</p>
    <button @click="start" class="bg-green-500 text-white p-2 rounded">
      Запустить
    </button>
    <button @click="stop" class="bg-red-500 text-white p-2 rounded">
      Остановить
    </button>
  </div>
</template>

<script setup>
import { defineExpose, ref } from "vue";

// Реактивная переменная для времени
const time = ref(0);
let timer = null;

// Функция для запуска таймера
const start = () => {
  if (!timer) {
    timer = setInterval(() => {
      time.value++;
    }, 1000);
  }
};

// Функция для остановки таймера
const stop = () => {
  clearInterval(timer);
  timer = null;
};

// Экспонируем методы для доступа из родительского компонента
defineExpose({ start, stop });
</script>

<style scoped>
/* Здесь могут быть дополнительные стили, если нужно */
</style>
