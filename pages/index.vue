<script setup lang="ts">
const count = useState("count", () => 0);
</script>
<template>
  <div class="">
    <v-btn @click="count++">Count: {{ count }}</v-btn>
  </div>
</template>
