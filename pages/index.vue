<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div class="inline-flex flex-col gap-2">
    <div class="">Frontend count: {{ count }}</div>
    <UseButton label="Click" motion-animate="m-p-wobble" @click="count++" />
  </div>
</template>
