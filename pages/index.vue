<script setup lang="ts">
import { ref } from "vue";
const color = ref("#3F51B5");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function handleClick() {
  color.value = getRandomColor();
}
</script>
<template>
  <div class="inline-flex flex-col gap-5">
    <v-btn
      prepend-icon="mdi-palette"
      variant="outlined"
      size="x-large"
      rounded="lg"
      @click="handleClick"
    >
      Change color
    </v-btn>
    <div class="w-full">
      <div
        class="max-w-[400px] px-5 rounded-xl transition duration-300"
        :style="{ backgroundColor: color }"
      >
        <div class="flex flex-col items-center gap-5 py-5">
          <v-img
            class="w-[300px] rounded-xl"
            src="/img/Code/frontend.jpg"
            alt="random image"
          />
          <div class="">
            <v-card-title class="text-2xl text-black">
              {{ color }}
            </v-card-title>
            <v-card-text>
              <!-- Removed paragraph text -->
            </v-card-text>
            <div class="flex flex-col gap-5">
              <v-btn variant="outlined" size="large" rounded="lg"
                >Learn more</v-btn
              >
              <v-btn variant="elevated" size="large" rounded="lg" color="blue"
                >Buy now</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
