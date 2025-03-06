<script setup lang="ts">
const items = [
  {
    id: 1,
    title: "Product",
    text: [
      {
        id: 1,
        link: "/",
        text: "Editor",
      },
      {
        id: 2,
        link: "/",
        text: "Collaboration",
      },
      {
        id: 3,
        link: "/",
        text: "Content AI",
      },
      {
        id: 4,
        link: "/",
        text: "Documents",
      },
      {
        id: 5,
        link: "/",
        text: "Pricing",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    text: [
      {
        id: 1,
        link: "/",
        text: "Blog",
      },
      {
        id: 2,
        link: "/",
        text: "About",
      },
      {
        id: 3,
        link: "/",
        text: "Contact us",
      },
    ],
  },
  {
    id: 3,
    title: "Docs",
    text: [
      {
        id: 1,
        link: "/",
        text: "Editor",
      },
      {
        id: 2,
        link: "/",
        text: "Hocuspocus",
      },
      {
        id: 3,
        link: "/",
        text: "Extensions",
      },
      {
        id: 4,
        link: "/",
        text: "Examples",
      },
    ],
  },
  {
    id: 4,
    title: "Resources",
    text: [
      {
        id: 1,
        link: "/",
        text: "Release",
      },
      {
        id: 2,
        link: "/",
        text: "Calculator",
      },
      {
        id: 3,
        link: "/",
        text: "Experiments",
      },
      {
        id: 4,
        link: "/",
        text: "MIT license",
      },
      {
        id: 5,
        link: "/",
        text: "Security",
      },
      {
        id: 6,
        link: "/",
        text: "Pro license",
      },
    ],
  },
  {
    id: 5,
    title: "Connect",
    text: [
      {
        id: 1,
        link: "/",
        text: "GitHub",
      },
      {
        id: 2,
        link: "/",
        text: "Discord",
      },
      {
        id: 3,
        link: "/",
        text: "Linkedin",
      },
      {
        id: 4,
        link: "/",
        text: "X",
      },
    ],
  },
];
</script>
<template>
  <div class="mt-[100px]">
    <div
      class="bg-[#1A1919] w-full sm:rounded-t-[60px] rounded-t-[30px] lg:pt-[240px] pt-[140px] pb-[80px] px-5"
    >
      <div class="flex-i-j-center">
        <div class="max-w-[830px] text-white">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center mt-[20px]"
          >
            Start your journey
            <span class="font-[100] font-serif"> with Tiptap</span>
          </div>

          <div class="mt-[80px]">
            <NuxtLink to="/" data-aos="fade-up" data-aos-delay="200">
              <div class="flex items-center justify-center">
                <div class="relative group">
                  <button
                    class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span
                      class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>

                    <span
                      class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950"
                    >
                      <div class="relative z-10 flex items-center space-x-2">
                        <span
                          class="transition-all duration-500 group-hover:translate-x-1 text-[18px]"
                          >Get started</span
                        >
                        <svg
                          class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                          data-slot="icon"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div
            class="mt-[100px] flex flex-wrap justify-center lg:gap-25 sm:gap-20 gap-15"
          >
            <div v-for="item in items" :key="item.id" class="">
              <div
                data-aos="fade-up"
                :data-aos-delay="item.id * 100"
                class="font-bold"
              >
                {{ item.title }}
              </div>
              <div class="flex flex-col">
                <div v-for="text in item.text" :key="text.id" class="my-[7px]">
                  <NuxtLink
                    data-aos="fade-up"
                    :data-aos-delay="item.id * 100"
                    :to="text.link"
                    class="text-gray-400 font-semibold"
                  >
                    {{ text.text }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap place-content-center gap-5 mt-[70px]">
            <NuxtLink to="/">© 2025 Tiptap</NuxtLink>

            <NuxtLink to="/" class="text-gray-400 font-semibold"
              >System status</NuxtLink
            >
            <NuxtLink to="/" class="text-gray-400 font-semibold"
              >Privacy policy</NuxtLink
            >
            <NuxtLink to="/" class="text-gray-400 font-semibold"
              >Terms</NuxtLink
            >
            <NuxtLink to="/" class="text-gray-400 font-semibold">
              Legal notice</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
