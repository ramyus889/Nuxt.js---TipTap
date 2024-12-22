<script setup lang="ts">
useHead({
  title: "Nuxt.js",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "yandex-verification", content: "30dd311c3ef215f7" },
    { name: "description", content: "Nuxt 3 Frontend Development" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>
<template>
  <v-app>
    <v-main>
      <UseHeader />
      <div class="mt-[100px] sm:mx-[50px] mx-[30px]">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>
