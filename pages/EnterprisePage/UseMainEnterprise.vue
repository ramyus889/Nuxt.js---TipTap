<script setup lang="ts">
onMounted(() => {
  document.title = "Tiptap - Enterprise";
});
const items = [
  {
    id: 1,
    title: "Seamless scaling",
    bcolor: "border-[#994BFF]",
    tcolor: "text-[#994BFF]",
    scolor: "#994BFF",
    number: "01",
  },
  {
    id: 2,
    title: "Enterprise security",
    bcolor: "border-[#8269F8]",
    tcolor: "text-[#8269F8]",
    scolor: "#8269F8",
    number: "02",
  },
  {
    id: 3,
    title: "Faster time to market",
    bcolor: "border-[#688BF0]",
    tcolor: "text-[#688BF0]",
    scolor: "#688BF0",
    number: "03",
  },
  {
    id: 4,
    title: "Cloud or on-premises",
    bcolor: "border-[#4FACE9]",
    tcolor: "text-[#4FACE9]",
    scolor: "#4FACE9",
    number: "04",
  },
  {
    id: 5,
    title: "Extensive support",
    bcolor: "border-[#36CDE1]",
    tcolor: "text-[#36CDE1]",
    scolor: "#36CDE1",
    number: "05",
  },
];
</script>
<template>
  <div class="">
    <div class="flex-i-j-center sm:pt-[200px] pt-[150px] mx-2">
      <div class="max-w-[1210px]">
        <div
          class="text-center text-[20px] font-bold bg-gradient-to-r from-[#0df28f] to-[#8b33ff] bg-clip-text text-transparent"
        >
          Tiptap for Enterprises
        </div>
        <div
          class="text-[clamp(2rem,_10vw,_86px)] max-w-[810px] mx-auto leading-[clamp(2rem,_10vw,_86px)] font-bold text-center"
        >
          Accelerate your
          <span class="font-[100] font-serif">success with Tiptap</span>
        </div>
        <div
          class="text-center font-[400] sm:text-[26px] max-w-[810px] mx-auto text-[20px] sm:leading-[36px] leading-[30px] mt-[40px]"
        >
          Cut upfront expenses and get to market faster with an editor
          experience your team and customers will love.
        </div>
        <div class="flex-i-j-center mt-[60px]">
          <button
            class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          >
            Contact Sales
          </button>
        </div>
        <div class="mt-[80px] flex flex-wrap justify-center gap-6">
          <div
            v-for="item in items"
            :key="item.id"
            :class="item.bcolor"
            class="border rounded-[20px] p-[21px] max-sm:w-full max-sm:flex-i-j-center max-sm:flex-col"
          >
            <div
              :class="item.tcolor"
              :style="{
                '-webkit-text-stroke-width': '1px',
                '-webkit-text-stroke-color': item.scolor,
              }"
              class="text-[40px] leading-[40px] text-transparent"
            >
              {{ item.number }}
            </div>
            <div
              class="text-[21px] font-bold mt-[20px] sm:max-w-[180px] leading-[28px]"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
