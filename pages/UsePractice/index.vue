<script setup lang="ts">
const { x, y } = useMouse();
</script>
<template>
  <div class="">Component {{ x }} {{ y }}</div>
  <Icon name="mdi:github" size="50" />
</template>
