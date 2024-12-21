<script setup lang="ts">
const count = useState("count", () => 0);

const ready = useTimeout(3000);
</script>
<template>
  <div class="inline-flex flex-col gap-5">
    <div class="flex items-center gap-5">
      <v-btn
        prepend-icon="mdi-minus"
        color="error"
        size="x-large"
        :loading="!ready"
        :disabled="!ready"
        @click="ready && count--"
      >
        Decrement</v-btn
      >
      <div class="text-3xl">{{ count }}</div>
      <v-btn
        prepend-icon="mdi-plus"
        color="success"
        size="x-large"
        :loading="!ready"
        :disabled="!ready"
        @click="ready && count++"
      >
        Increment
      </v-btn>
    </div>
  </div>
</template>
