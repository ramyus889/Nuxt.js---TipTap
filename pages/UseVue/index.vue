<script setup lang="ts">
useHead({
  title: "Nuxt.js - Vue",
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>
<template>
  <div class="">
    <v-btn>
      Vue
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>
