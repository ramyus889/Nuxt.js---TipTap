<script setup lang="ts">
useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Nuxt 3 Frontend Development" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/tiptapLogo.png" }],
});
</script>
<template>
  <UseHeader />
  <div class="">
    <slot />
  </div>
</template>
