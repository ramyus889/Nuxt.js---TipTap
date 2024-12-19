<script>
export default {
  name: "default",
  mounted() {
    document.title = "Nuxt.js - Vue";
  },
};
</script>
<template>
  <div class="">
    <v-btn>
      Vue
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>
