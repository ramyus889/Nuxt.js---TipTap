<script setup lang="ts">
const items = [
  {
    id: 1,
    image: "/a_axios.svg",
    text: "Communication management platform",
  },
  {
    id: 2,
    image: "/bcg.svg",
    text: "Management consulting firm",
  },
  {
    id: 3,
    image: "/beehiiv.svg",
    text: "Newsletter publishing platform",
  },
  {
    id: 4,
    image: "/businessinsider.svg",
    text: "Online media company",
  },
  {
    id: 5,
    image: "/company-cam.svg",
    text: "Project management tool",
  },
  {
    id: 6,
    image: "/devrev.svg",
    text: "AI platform for Businesses",
  },
  {
    id: 7,
    image: "/jenniai.svg",
    text: "Academic AI assistant",
  },
  {
    id: 8,
    image: "/opal.svg",
    text: "Marketing management platform",
  },
  {
    id: 9,
    image: "/planetbids.svg",
    text: "eProcurement platform",
  },
  {
    id: 10,
    image: "/productboard.svg",
    text: "Product management software",
  },
  {
    id: 11,
    image: "/reforge.svg",
    text: "Career education platform",
  },
  {
    id: 12,
    image: "/scispace.svg",
    text: "Scientific AI Chat",
  },
  {
    id: 13,
    image: "/simpplr.svg",
    text: "Intranet platform",
  },
  {
    id: 14,
    image: "/smallpdf.svg",
    text: "PDF software",
  },
  {
    id: 15,
    image: "softexpert.svg",
    text: "Enterprise content management software",
  },
  {
    id: 16,
    image: "/staffbase.svg",
    text: "Internal communications",
  },
  {
    id: 17,
    image: "/storyblok-long.svg",
    text: "Content management system",
  },
  {
    id: 18,
    image: "/substack-wordmark.svg",
    text: "Publishing platform",
  },
  {
    id: 19,
    image: "/trainual.svg",
    text: "Employee training",
  },
  {
    id: 20,
    image: "/usertesting.svg",
    text: "Human insights platform",
  },
  {
    id: 21,
    image: "/deshawco.svg",
    col: "max-xl:col-span-2 max-md:col-span-1",
    text: "Global investment and technology",
  },
];
</script>
<template>
  <div class="mt-[80px] pb-[180px] flex-i-j-center mx-2">
    <div
      class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:max-w-[1200px] w-full justify-center gap-5"
    >
      <div
        v-for="item in items"
        :key="item.id"
        :class="item.col"
        class="bg-[#131111] py-[60px] xl:px-[80px] rounded-[30px] flex-i-j-center flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <img
          :src="item.image"
          alt=""
          class="w-[240px] h-[80px] bg-white rounded-3xl"
        />
        <div class="text-[15px] text-center text-[#858484] font-bold mt-[10px]">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
