<script setup lang="ts">
defineEmits(["close"]);
</script>
<template>
  <div
    class="bg-white shadow-sm mt-2 rounded-xl ps-[18px] *:py-[8px] text-[20px] flex flex-col transition-all"
  >
    <NuxtLink to="/CustomersPage" class="btn-head-hover" @click="$emit('close')"
      >Customers</NuxtLink
    >
    <NuxtLink
      to="/EnterprisePage"
      class="btn-head-hover"
      @click="$emit('close')"
      >Enterprise</NuxtLink
    >
    <NuxtLink to="/" class="btn-head-hover" @click="$emit('close')"
      >Pricing</NuxtLink
    >
  </div>
</template>
