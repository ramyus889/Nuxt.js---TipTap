<script setup lang="ts">
const items = [
  {
    id: 1,
    image: "/p-500.jpg",
    title: "Introducing more extensive Tiptap experiments",
    data: "Nov 15, 2024",
    bool: false,
    to: "/",
  },
  {
    id: 2,
    image: "/p-600.jpg",
    title: "Introducing Snapshot Compare for Tiptap",
    data: "Oct 31, 2024",
    bool: true,
    tag: "Documents",
    to: "/",
  },
  {
    id: 3,
    image: "/p-700.jpg",
    title: "Tiptap v2.9 has arrived",
    data: "Oct 28, 2024",
    bool: true,
    tag: "Editor",
    to: "/",
  },
];
const items2 = [
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
</script>

<template>
  <div class="mt-[200px]">
    <div class="flex flex-col items-center">
      <div class="max-w-[770px]">
        <div class="sm:text-[26px] text-[20px] font-[400] text-center">
          Knowledge
        </div>
        <div
          class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center text-black mt-[20px]"
        >
          Code your editor
          <span class="font-[100] font-serif"> with everything you need</span>
        </div>
        <div
          class="text-center text-black font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
        >
          Learn how to build professional editors and get guidance, insights,
          and access to all the essentials in our docs and blog.
        </div>
      </div>
      <div class="mt-[90px]">
        <div class="text-start">Release notes</div>
      </div>
      <div class="flex lg:flex-row flex-col gap-5">
        <div v-for="item in items" :key="item.id" class="">
          <NuxtLink
            :to="item.to"
            class="bg-white shadow-sm group hover:rounded-4xl transition-all duration-350 pt-[20px] overflow-hidden rounded-3xl lg:max-w-[387px] flex-col-beetween gap-5 h-full"
          >
            <div class="sm:px-[30px] px-[20px]">
              <div class="text-[14px]">{{ item.data }}</div>
              <div class="text-[22px] font-bold my-[10px]">
                {{ item.title }}
              </div>
            </div>
            <div class="">
              <img
                :src="item.image"
                alt=""
                class="rounded-b-3xl group-hover:rounded-b-4xl group-hover:scale-110 transition-all duration-350 w-full"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="mt-[32px]">
        <div v-for="item in items2" :key="item.id" class="">
          <NuxtLink
            :to="item.to"
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
    </div>
  </div>
</template>
