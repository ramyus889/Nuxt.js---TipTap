<script setup lang="ts">
onMounted(() => {
  document.title = "Tiptap - Home";
});
</script>
<template>
  <div class="flex-i-j-center sm:mt-[200px] mt-[150px]">
    <div class="max-w-[890px]">
      <div
        class="text-[clamp(2rem,_10vw,_96px)] leading-[clamp(2rem,_10vw,_96px)] font-bold text-center text-black"
      >
        The editor suite to build products with real-time
      </div>
      <div
        class="text-center text-black font-[400] sm:text-[26px] text-[20px] sm:leading-[36px] leading-[30px] mt-[50px]"
      >
        Tiptap is the headless and open source editor framework. Integrate over
        100+ extensions and paid features like collaboration and AI agents to
        create the UX you want
      </div>
      <div class="flex-i-j-center gap-3 mt-[60px]">
        <div class="sm:max-w-90 w-full">
          <div class="flex flex-col bg-white shadow-sm p-2 rounded-3xl gap-1">
            <NuxtLink
              to="/"
              class="bg-black hover:bg-black/80 hover:scale-[1.050] hover:translate-y-[-7px] hover:rounded-[23px] hover:rounded-bl-none hover:rounded-br-none active:bg-black/80 active:scale-[1.050] active:translate-y-[-7px] active:rounded-[23px] active:rounded-bl-none active:rounded-br-none px-6 py-2 rounded-2xl rounded-bl-lg rounded-br-lg transition-all text-center text-white font-medium cursor-pointer"
              >Sign up free
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-gray-100 hover:bg-gray-300 hover:scale-[1.050] hover:translate-y-[7px] hover:rounded-[23px] hover:rounded-tl-none hover:rounded-tr-none active:bg-gray-300 active:scale-[1.050] active:translate-y-[7px] active:rounded-[23px] active:rounded-tl-none active:rounded-tr-none px-6 py-2 rounded-2xl rounded-tl-lg rounded-tr-lg transition-all text-center hover:shadow-sm text-black font-medium cursor-pointer"
            >
              Try it live
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
