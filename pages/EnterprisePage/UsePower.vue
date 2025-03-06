<script setup lang="ts">
const items = [
  {
    id: 1,
    image: "/p-800.png",
    title: "Developer's launchpad",
    text: "Code with clarity: Explore comprehensive docs and examples to jumpstart your journey with Tiptap.",
    bool: false,
    flexCol: "flex items-center gap-10",
    col: "col-span-2",
    to: "/",
    link: "Documentation →",
  },
];
const items2 = [
  {
    id: 1,
    title: "X",
    text: "For announcements, tips, and general information.",
    image: "/X.svg",
  },
  {
    id: 2,
    title: "Discord",
    text: "To get involved in the community, ask questions, and share tips.",
    image: "/discord.svg",
  },
  {
    id: 3,
    title: "GitHub",
    text: "For issues, features requests, and contribute.",
    image: "/github.svg",
  },
];
</script>

<template>
  <div class="mt-[200px]">
    <div class="flex flex-col items-center">
      <div class="max-w-[870px]">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center text-black mt-[20px]"
        >
          Tiptap powers development teams
          <span class="font-[100] font-serif">to excellence</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="text-center text-black font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
        >
          Tiptap delivers well-maintained software and includes best-in-class
          documentation along with a large developer community.
        </div>
      </div>

      <div class="mt-[80px] flex-i-center mx-2">
        <div v-for="item in items" :key="item.id" class="">
          <NuxtLink
            :to="item.to"
            data-aos="fade-up"
            :data-aos-delay="item.id"
            class="flex lg:flex-row flex-col lg:items-center lg:gap-20 group hover:rounded-4xl transition-all bg-white shadow-sm lg:max-w-[1200px] max-w-[542px] rounded-3xl"
          >
            <div class="lg:ps-[40px] px-[20px] lg:py-[40px] py-[20px]">
              <div class="text-[clamp(1.5rem,_3vw,_36px)] font-bold">
                {{ item.title }}
              </div>
              <div
                class="text-[clamp(18px,_2vw,_22px)] mt-[20px] lg:max-w-[740px]"
              >
                {{ item.text }}
              </div>
              <div class="text-[18px] mt-[58px] font-semibold">
                {{ item.link }}
              </div>
            </div>
            <div class="mt-[40px]">
              <img
                :src="item.image"
                alt=""
                class="rounded-br-3xl group-hover:rounded-br-4xl transition-all"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex-i-j-center mt-[100px]">
        <div class="flex flex-wrap justify-center gap-[50px]">
          <div
            v-for="item in items2"
            :key="item.id"
            data-aos="fade-up"
            :data-aos-delay="item.id * 100"
            class="flex-col-center gap-[15px] max-w-[273px] text-center"
          >
            <img :src="item.image" alt="" class="w-[30px]" />
            <div class="text-[20px] font-bold">{{ item.title }}</div>
            <div class="text-[18px]">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
