<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="">
    <v-btn>
      Custom
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>
