<script setup lang="ts">
import AboutCard from "~/pageComponents/AboutComponents/AboutCard.vue";
import AboutMain from "~/pageComponents/AboutComponents/AboutMain.vue";
</script>

<template>
  <div class="flex place-content-start">
    <div class="flex flex-col items-center gap-5">
      <AboutMain />
      <AboutCard />
    </div>
  </div>
</template>
