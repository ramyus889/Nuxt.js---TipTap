<script setup lang="ts">
import BlogCard from "~/pageComponents/BlogComponents/BlogCard.vue";
import BlogMain from "~/pageComponents/BlogComponents/BlogMain.vue";
</script>

<template>
  <div class="flex place-content-start">
    <div class="flex flex-col items-center gap-5">
      <BlogMain />
      <BlogCard />
    </div>
  </div>
</template>
