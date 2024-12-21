<script setup lang="ts">
useHead({
  title: "Nuxt.js - Nuxt",
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>

<template>
  <div class="">
    <DevOnly>
      <v-btn>
        Nuxt
        <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
      </v-btn>
    </DevOnly>
  </div>
</template>
