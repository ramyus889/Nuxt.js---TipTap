<template>
  <v-layout style="height: 56px">
    <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
      <v-btn as="router-link" to="/">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
      <v-btn as="router-link" to="/UseCustom">
        <v-icon>mdi-cube-scan</v-icon>
        <span>Custom</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script setup>
import { computed, ref } from "vue";

const value = ref(1);
const color = computed(() => {
  return (
    ["indigo", "teal", "teal-accent-4", "blue", "blue-grey"][value.value] ||
    "blue-grey"
  );
});
</script>
