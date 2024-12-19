<script>
export default {
  name: "default",
  mounted() {
    document.title = "Nuxt.js - Code";
  },
};
</script>

<template>
  <div class="">
    <v-btn>
      Code
      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
    </v-btn>
  </div>
</template>
