<script setup lang="ts">
const items = [
  {
    id: 1,
    image: "/anthropic.svg",
    text: "Artificial intelligence startup",
  },
  {
    id: 2,
    image: "/axioshq.svg",
    text: "Internal communication software",
  },
  {
    id: 3,
    image: "/charthop.svg",
    text: "People operations platform",
  },
  {
    id: 4,
    image: "/claude.svg",
    text: "AI assistant",
  },
  {
    id: 5,
    image: "/front.svg",
    text: "Customer operations platform",
  },
  {
    id: 6,
    image: "/gamma.svg",
    text: "AI-Powered Presentation Builder",
  },
  {
    id: 7,
    image: "/gitlab-long.svg",
    text: "DevSecOps platform",
  },
  {
    id: 8,
    image: "/linkedin.svg",
    text: "Business social media",
  },
  {
    id: 9,
    image: "/niice.svg",
    text: "Brand asset platform",
  },
  {
    id: 10,
    image: "/posthog.svg",
    text: "Product operating system",
  },
  {
    id: 11,
    image: "/thomson-reuters.svg",
    text: "Media & information services platform",
  },
  {
    id: 12,
    image: "/welleton.svg",
    text: "Website builder",
  },
  {
    id: 13,
    grid: "xl:col-span-1",
    image: "/ahrefs.svg",
    text: "SEO tools",
  },
  {
    id: 14,
    grid: "xl:col-span-2",
    image: "/nextcloud.svg",
    text: "Content collaboration platform",
  },
  {
    id: 15,
    grid: "xl:col-span-1 max-[768px]:col-span-2 max-[640px]:col-span-1",
    image: "/ycombinator.svg",
    text: "Startup accelerator",
  },
];
</script>
<template>
  <div class="bg-[#1A1919]">
    <div
      class="bg-[#F5F5F4] w-full sm:rounded-t-[60px] rounded-t-[30px] lg:pt-[240px] pt-[140px] pb-[80px] px-2 flex-col-center"
    >
      <div class="max-w-[710px]">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="text-[clamp(2rem,_10vw,_60px)] leading-[clamp(2rem,_10vw,_60px)] font-[600] text-center"
        >
          More businesses
          <span class="font-[100] font-serif text-[clamp(2rem,_10vw,_57px)]"
            >integrating Tiptap</span
          >
        </div>
      </div>
      <div class="mt-[80px] pb-[180px] mx-2 max-sm:w-full">
        <div
          class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:max-w-[1200px] gap-5"
        >
          <div
            v-for="item in items"
            :key="item.id"
            :class="item.grid"
            data-aos="fade-up"
            :data-aos-delay="item.id * 100"
            class="bg-white py-[60px] xl:px-[53px] rounded-[30px] shadow-sm flex-i-j-center flex-col hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img :src="item.image" alt="" class="w-[125px] h-[50px]" />
            <div class="text-[15px] text-center text-[#858484] mt-[10px]">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
