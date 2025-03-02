<script setup lang="ts">
import UseFooter from "./MainPage/UseFooter.vue";
import UseKnowledge from "./MainPage/UseKhowledge.vue";
import UseMain from "./MainPage/UseMain.vue";
import UseMarquee from "./MainPage/UseMarquee.vue";
import UseTemplates from "./MainPage/UseTemplates.vue";
import UseTipTapSuite from "./MainPage/UseTipTapSuite.vue";
</script>

<template>
  <div class="mx-[8px]">
    <UseMain />
    <UseMarquee />
    <UseTipTapSuite />
    <UseTemplates />
    <UseKnowledge />
  </div>
  <UseFooter />
</template>
