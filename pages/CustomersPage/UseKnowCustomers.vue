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
</script>

<template>
  <div class="sm:mt-[210px] mt-[150px]">
    <div class="mx-auto max-w-[1220px]">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        class="text-[24px] py-[10px] sm:ps-10 ps-5"
      >
        Release notes
      </div>
    </div>
    <div class="mx-auto max-w-[1220px] px-2">
      <div class="flex flex-wrap justify-center gap-5">
        <div v-for="item in items" :key="item.id" class="">
          <NuxtLink
            :to="item.to"
            data-aos="fade-up"
            :data-aos-delay="item.id * 100"
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
    </div>
  </div>
</template>
