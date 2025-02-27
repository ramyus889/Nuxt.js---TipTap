<script setup lang="ts">
import UseFooter from "./components/MainPage/UseFooter.vue";
import UseKnowledge from "./components/MainPage/UseKhowledge.vue";
import UseMain from "./components/MainPage/UseMain.vue";
import UseMarquee from "./components/MainPage/UseMarquee.vue";
import UseTemplates from "./components/MainPage/UseTemplates.vue";
import UseTipTapSuite from "./components/MainPage/UseTipTapSuite.vue";
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
