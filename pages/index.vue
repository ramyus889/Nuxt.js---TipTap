<script setup lang="ts">
const { counter, doubleCounter } = useCounter();
const ready = useTimeout(2000);
</script>
<template>
  <div class="inline-flex flex-col items-center gap-5">
    <div class="flex items-center gap-5">
      <v-btn
        prepend-icon="mdi-minus"
        color="error"
        size="x-large"
        :loading="!ready"
        :disabled="!ready"
        @click="ready && counter++"
      >
        Decrement</v-btn
      >
      <div class="text-3xl">{{ counter }}</div>
      <v-btn
        prepend-icon="mdi-plus"
        color="success"
        size="x-large"
        :loading="!ready"
        :disabled="!ready"
        @click="ready && counter--"
      >
        Increment
      </v-btn>
    </div>
    <div class="w-full text-3xl text-center UserBorder">
      {{ doubleCounter }}
    </div>
  </div>
</template>
