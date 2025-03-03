<script setup lang="ts">
const items = [
  {
    id: 1,
    icon: "mdi:pencil-box-outline",
    title: "Editor",
    tag: [
      {
        id: 1,
        text: "Open source",
      },
    ],
    text: "Build custom editors that align perfectly with your users needs, offering flexibility and ease of use. Ideal for creating user-centric interfaces with minimal fuss.",
  },
  {
    id: 2,
    icon: "mdi:checkbox-multiple-blank-circle-outline",
    title: "Collaboration",
    tag: [
      {
        id: 1,
        text: "Cloud",
      },
      {
        id: 2,
        text: "Try for free",
      },
    ],
    text: "Allow your users to collaborate in any document and media. Integrate live carets and cursors to show who is typing, support offline editing and sync content.",
  },
  {
    id: 3,
    icon: "mdi:robot",
    title: "Content AI",
    tag: [
      {
        id: 1,
        text: "Cloud",
      },
      {
        id: 2,
        text: "Paid feature",
      },
    ],
    text: "Help your users perfecting their tone and crossing language barriers, Tiptaps Content AI transforms words into wonders. Write, refine, and captivate with ease.",
  },
];
</script>
<template>
  <div class="sm:mt-[100px] px-2">
    <div class="flex flex-col items-center">
      <div class="max-w-[770px]">
        <div class="sm:text-[26px] text-[20px] font-[400] text-center">
          Tiptap Suite
        </div>
        <div
          class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center text-black mt-[20px]"
        >
          Supercharge your
          <span class="font-[100] font-serif"> content experience</span>
        </div>
        <div
          class="text-center text-black font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
        >
          Essentially a headless open source editor, Tiptap has a wide range of
          paid features that give developers exactly the kind of experience
          they're looking for - fully customizable to build their product needs.
        </div>
      </div>
      <div
        class="flex flex-wrap max-w-[1300px] justify-center gap-8 mt-[120px]"
      >
        <div v-for="item in items" :key="item.id" class="">
          <NuxtLink
            to="/"
            class="bg-white shadow-sm sm:p-[40px] p-[25px] rounded-4xl lg:w-[370px] flex flex-col justify-between h-full hover:scale-102 hover:shadow-lg active:scale-102 active:shadow-lg transition-all"
          >
            <div class="">
              <Icon :name="item.icon" size="40" />
              <div class="text-[26px] font-bold mt-[20px]">
                {{ item.title }}
              </div>
              <div class="flex gap-3">
                <div v-for="tag in item.tag" :key="tag.id">
                  <div
                    class="border border-black rounded-lg px-[4px] py-[2px] text-[12px]"
                  >
                    {{ tag.text }}
                  </div>
                </div>
              </div>
              <div class="text-[18px] mt-[20px]">
                {{ item.text }}
              </div>
            </div>
            <div class="mt-[70px]">
              <div class="btn-head-black text-center">Learn more</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
