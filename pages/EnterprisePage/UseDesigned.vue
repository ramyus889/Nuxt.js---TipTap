<script setup lang="ts">
const items = [
  {
    label: "01 Pull Docker images",
    title: "Ready-to-use Docker images",
    description:
      "Use your license key and credentials to download the Docker images from Tiptap's private registry. Each image comes fully packaged with dependencies and documentation, so your team can deploy in minutes.",
    image: "/docker.svg",
    slot: "docker",
  },
  {
    label: "02 Deploy infrastructure",
    title: "Integrate Tiptap with your infrastructure",
    description:
      "Whether on-premises or in the cloud, Tiptap adapts to your setup. Connect databases, set environment variables, and configure long-term authentication. As part of the onboarding experience, our engineers work closely with your team to deliver a fast and successful integration.",
    image: "/deploy.svg",
    slot: "deploy",
  },
  {
    label: "03 Unlock features",
    title: "Enable collaboration, comments, and AI tools",
    description:
      "Add the features your users need, from real-time collaboration and comments to content AI, with just a few simple code adjustments. You can customize the editor's capabilities to create a rich, interactive content experience and improve how documents are managed.",
    image: "/unlock-features.svg",
    slot: "features",
  },
];
</script>
<template>
  <div class="sm:flex-i-j-center sm:mt-[200px] mt-[150px] hidden">
    <div class="max-w-[890px]">
      <div
        class="text-[clamp(2rem,_10vw,_84px)] leading-[clamp(2rem,_10vw,_84px)] font-bold text-center"
      >
        Tiptap is designed
        <div class="font-[100] font-serif">to run on your premises</div>
      </div>
      <div
        class="text-center font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
      >
        For industries with strict regulations, deploying Tiptap on your own
        infrastructure keeps you in control and compliant.
      </div>
      <div class="">
        <UTabs
          :items="items"
          color="neutral"
          class="gap-4 w-full mt-[100px]"
          :ui="{ trigger: 'flex-1' }"
        >
          <template #docker="{ item }">
            <div class="flex-col-center">
              <img :src="item.image" alt="" class="mb-[35px] mt-[80px]" />
              <div class="text-[30px] pb-[15px] text-center">
                {{ item.title }}
              </div>
              <p class="text-(--ui-text-muted) text-[18px] mb-4 text-center">
                {{ item.description }}
              </p>
            </div>
          </template>

          <template #deploy="{ item }">
            <div class="flex-col-center">
              <img :src="item.image" alt="" class="mb-[35px] mt-[80px]" />
              <div class="text-[30px] pb-[15px] text-center">
                {{ item.title }}
              </div>
              <p class="text-(--ui-text-muted) text-[18px] mb-4 text-center">
                {{ item.description }}
              </p>
            </div>
          </template>
          <template #features="{ item }">
            <div class="flex-col-center">
              <img :src="item.image" alt="" class="mb-[35px] mt-[80px]" />
              <div class="text-[30px] pb-[15px] text-center">
                {{ item.title }}
              </div>
              <p class="text-(--ui-text-muted) text-[18px] mb-4 text-center">
                {{ item.description }}
              </p>
            </div>
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>
