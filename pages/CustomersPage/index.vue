<script setup lang="ts">
import UseFooter from "../MainPage/UseFooter.vue";
import UseIntegrate from "./UseIntegrate.vue";
import UseKnowCustomers from "./UseKnowCustomers.vue";
import UseLogoCard from "./UseLogoCard.vue";
import UseMainCustomers from "./UseMainCustomers.vue";
import UseSuiteCustomers from "./UseSuiteCustomers.vue";
</script>

<template>
  <div class="bg-[#1A1919] text-white">
    <UseMainCustomers />
    <UseLogoCard />
  </div>
  <UseIntegrate />
  <UseSuiteCustomers />
  <UseKnowCustomers />
  <UseFooter />
</template>
