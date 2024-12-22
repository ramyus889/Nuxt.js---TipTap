<script setup lang="ts">
useHead({
  title: "Nuxt.js",
  meta: [
    { name: "description", content: "Nuxt 3 Frontend Development" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" },
    { rel: "shortcut icon", href: "/img/Code/frontend.jpg" },
  ],
});
</script>
<template>
  <v-app>
    <v-main>
      <Head>
        <Meta name="yandex-verification" content="30dd311c3ef215f7" />
        <UseHeader />
        <div class="mt-[100px] sm:mx-[50px] mx-[30px]">
          <slot />
        </div>
      </Head>
    </v-main>
  </v-app>
</template>
