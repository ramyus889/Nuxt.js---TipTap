<script>
export default {
  name: "default",
  mounted() {
    document.title = "Nuxt.js - Nuxt";
  },
};
</script>

<template>
  <div class="">
    <v-btn>
      Nuxt
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>
