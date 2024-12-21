<script setup lang="ts">
useHead({
  title: "Nuxt.js - Nuxt",
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>

<template>
  <div class="inline-flex flex-col gap-10">
    <v-btn size="x-large" color="primary">
      Nuxt
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>
    <DevOnly>
      <v-btn size="x-large" color="secondary">
        DevOnly
        <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
      </v-btn>
    </DevOnly>
  </div>
</template>
