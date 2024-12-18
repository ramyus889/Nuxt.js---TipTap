<template>
  <v-layout style="height: 56px">
    <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
      <v-btn as="router-link" to="/">
        <v-icon>mdi-home</v-icon>

        <span>Home</span>
      </v-btn>
      <v-btn as="router-link" to="/UseNuxt">
        <v-icon>mdi-nuxt</v-icon>

        <span>Nuxt</span>
      </v-btn>

      <v-btn as="router-link" to="/UseVue">
        <v-icon>mdi-vuejs</v-icon>

        <span>Vue</span>
      </v-btn>
      <v-btn as="router-link" to="/UseCode">
        <v-icon>mdi-xml</v-icon>

        <span>Code</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
<script>
export default {
  data: () => ({ value: 1 }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "indigo";
        case 1:
          return "teal";
        case 2:
          return "teal-accent-4";
        case 3:
          return "blue";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>
