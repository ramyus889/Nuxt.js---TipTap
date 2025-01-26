<script setup lang="ts">
useHead({
  title: "Nuxt.js",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Nuxt 3 Frontend Development" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>
<template>
  <UseHeader />
  <div class="mt-[100px] ms-[100px]">
    <slot />
  </div>
</template>
