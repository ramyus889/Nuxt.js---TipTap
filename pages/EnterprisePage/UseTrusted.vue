<script setup lang="ts">
const items = [
  {
    id: 1,
    title: "LTS Support",
    text: "LTS ensures stability and reliability with extended maintenance, security updates, and guaranteed support for enterprise deployments.",
    image: "/long-term.svg",
  },
  {
    id: 2,
    title: "Closed beta access",
    text: "Test and help shape critical features coming soon to businesses like yours.",
    image: "/access.svg",
  },
  {
    id: 3,
    title: "Custom development",
    text: "Work with Tiptap engineers or partners to build custom features and integrations that match your unique needs.",
    image: "/development.svg",
  },
];
</script>
<template>
  <div class="flex place-content-center sm:mt-[250px] mt-[150px] mx-2">
    <div class="flex-col-center gap-[120px]">
      <div class="">
        <div
          class="text-[clamp(2rem,_10vw,_84px)] max-w-[910px] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center"
        >
          Your trusted partner
          <span class="font-[100] font-serif">for long-term success</span>
        </div>
        <div
          class="text-center text-black font-[400] max-w-[910px] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
        >
          Choosing the right editor is a strategic business decision. Tiptap is
          committed to delivering reliable solutions and ongoing support to meet
          the evolving needs of businesses.
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-[50px]">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex-col-center gap-[15px] max-w-[407px] text-center"
        >
          <img :src="item.image" alt="" class="w-[30px]" />
          <div class="text-[20px]">{{ item.title }}</div>
          <div class="text-[18px]">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
