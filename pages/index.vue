<script setup lang="ts">
const count = useState("count", () => 0);

const { sayFrontend } = useUtils();
sayFrontend();
</script>
<template>
  <div class="">
    <v-btn prepend-icon="mdi-alert-box" size="x-large" @click="count++"
      >Count: {{ count }}</v-btn
    >
  </div>
</template>
