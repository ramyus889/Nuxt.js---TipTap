<script setup lang="ts">
const items = [
  {
    id: 1,
    image: "/notion-like-template.jpg",
    title: "Notion like template",
    text: "Launch your product with our prebuilt notion-like template and quickly release a full fledged editor experience.",
    link: "Preview →",
    to: "/",
  },
  {
    id: 2,
    image: "/basic_editor-template.jpg",
    title: "Simple editor template",
    text: "Start your editor integration with a super tiny editor template. It comes with just the things you need to start coding.",
    to: "#",
    disabled: "opacity-30",
    disableTrue: true,
    link: "In development",
  },
  {
    id: 3,
    image: "/tiptap_comments_template.jpg",
    title: "Comments template",
    text: "Add threads and comments to your documents and app with our Editor extension and Comments UI template.",
    to: "#",
    disabled: "opacity-30",
    disableTrue: true,
    link: "In development",
  },
];
</script>

<template>
  <div class="mt-[200px]">
    <div class="flex flex-col items-center">
      <div class="max-w-[780px]">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="sm:text-[26px] text-[20px] font-[400] text-center"
        >
          Templates
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center text-black mt-[20px]"
        >
          Set up your editor
          <span class="font-[100] font-serif"> with React templates</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="text-center text-black font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
        >
          Get to market in the fast lane with our front-end templates.
          Customize, combine, and adapt them to your UX.
        </div>
        <div class="mt-[60px] flex-i-j-center">
          <NuxtLink to="/" class="btn-head-black"> Explore templates </NuxtLink>
        </div>
      </div>
      <div class="mt-[80px] flex lg:flex-row flex-col lg:gap-10 gap-20">
        <div v-for="item in items" :key="item.id" class="">
          <div
            data-aos="fade-up"
            :data-aos-delay="item.id * 100"
            class="flex-col-beetween lg:max-w-[400px] max-w-[700px] h-full"
          >
            <img
              :src="item.image"
              alt=""
              class="w-full rounded-3xl shadow-sm"
            />
            <div class="text-[26px] font-bold mt-[20px]">
              {{ item.title }}
            </div>
            <div class="text-[18px] mt-[20px]">
              {{ item.text }}
            </div>
            <div class="lg:mt-[70px] mt-[40px]">
              <NuxtLink
                :to="item.to"
                :class="item.disabled"
                :disabled="item.disableTrue"
                class="text-start font-bold"
                >{{ item.link }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
