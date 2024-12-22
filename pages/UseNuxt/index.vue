<script setup lang="ts">
useHead({
  title: "Nuxt.js - Nuxt",
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});

const { data: productCount, pending } = await useAsyncData("productCount", () =>
  $fetch("/api/count")
);

const refresh = () => {
  refreshNuxtData("productCount");
};
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

    <div class="text-xl text-center">
      {{ pending ? "Loading..." : productCount }}
    </div>
    <v-btn @click="refresh" size="x-large" color="primary"> Refresh </v-btn>
  </div>
</template>
