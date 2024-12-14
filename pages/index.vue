<script setup lang="ts">
import IndexCard from "./pageComponents/indexComponents/IndexCard.vue";
import IndexMain from "./pageComponents/indexComponents/IndexMain.vue";
</script>

<template>
  <div class="flex place-content-start">
    <div class="flex flex-col items-center gap-5">
      <IndexMain />
      <IndexCard />
    </div>
  </div>
</template>
