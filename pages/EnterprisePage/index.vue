<script setup lang="ts">
import UseFooter from "../MainPage/UseFooter.vue";
import UseMarquee from "../MainPage/UseMarquee.vue";
import UseDesigned from "./UseDesigned.vue";
import UseIndustry from "./UseIndustry.vue";
import UseMainEnterprise from "./UseMainEnterprise.vue";
import UsePower from "./UsePower.vue";
import UseTrusted from "./UseTrusted.vue";
</script>
<template>
  <div class="bg-[#1A1919] text-white pb-20">
    <UseMainEnterprise />
    <UseDesigned />
  </div>
  <UseIndustry />
  <UseMarquee />
  <UseTrusted />
  <UsePower />
  <UseFooter />
</template>
