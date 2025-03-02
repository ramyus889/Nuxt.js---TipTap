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
  {
    id: 4,
    icon: "mdi:comment-edit",
    grid: "",
    title: "Comments",
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
    text: "Integrate inline and document comments directly in your editor with Tiptap Comments. Ideal for collaboration, enabling real-time discussion and suggestions within the content.",
  },
  {
    id: 5,
    icon: "mdi:file-document",
    grid: "",
    title: "Content AI",
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
    text: "Self-host your documents for full control, or opt for our secure, scalable cloud. Create and manipulate your documents any way you want, whether youre flying solo or on Cloud 9.",
  },
];
</script>
<template>
  <div class="mt-[200px]">
    <div class="flex flex-col items-center">
      <div class="max-w-[770px]">
        <div class="sm:text-[26px] text-[20px] font-[400] text-center">
          Tiptap Suite
        </div>
        <div
          class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center text-black mt-[20px]"
        >
          Create your editor
          <span class="font-[100] font-serif"> with the features you want</span>
        </div>
        <div
          class="text-center text-black font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
        >
          Tiptap's extension-based architecture puts you in control. Choose from
          a wide range of over 100+ Core, Pro, and Cloud extensions, or build
          and integrate your own.
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
