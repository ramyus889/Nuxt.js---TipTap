<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="md:mx-auto sm:mx-5 sm:mt-5 mx-2 mt-2 flex-i-j-center">
      <div
        class="bg-white shadow-sm py-[8px] max-[768px]:w-full ps-[18px] pe-[8px] rounded-xl sm:text-[17px] text-[14px]"
      >
        <div class="flex-i-j-between gap-5">
          <div class="flex gap-5">
            <img src="/Tiptap/tiptapLogo2.svg" class="w-[84px]" alt="" />
            <div class="font-[400] md:flex hidden">
              <nuxt-link to="/" class="btn-head-hover">Features</nuxt-link>
              <nuxt-link to="/" class="btn-head-hover">Customers</nuxt-link>
              <nuxt-link to="/" class="btn-head-hover">Enterprise</nuxt-link>
              <nuxt-link to="/" class="btn-head-hover">Pricing</nuxt-link>
            </div>
          </div>
          <div class="font-[400] flex-i-center gap-1">
            <nuxt-link to="/" class="btn-head-hover">Contact Sales</nuxt-link>
            <nuxt-link to="/" class="btn-head-black">Sign In →</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
