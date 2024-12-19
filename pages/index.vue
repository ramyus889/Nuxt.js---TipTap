<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);
const color = ref("");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function handleClick() {
  counter.value++;
  color.value = getRandomColor();
}
</script>
<template>
  <div
    class="p-4 max-w-[400px] flex place-content-center rounded-xl transition delay-150 duration-300"
    :style="{ backgroundColor: color }"
  >
    <v-btn
      prepend-icon="mdi-thumb-up"
      variant="outlined"
      size="x-large"
      rounded="lg"
      @click="handleClick"
    >
      {{ counter }}
    </v-btn>
  </div>
</template>
