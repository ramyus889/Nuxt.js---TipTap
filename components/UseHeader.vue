<script setup lang="ts">
const isOpen = ref(false);
</script>
<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="md:mx-auto md:mt-5 mx-2 mt-2 md:flex-i-j-center">
      <header
        class="bg-white shadow-sm py-[8px] max-[768px]:w-full ps-[18px] pe-[8px] rounded-xl sm:text-[17px] text-[14px]"
      >
        <div class="flex-i-j-between gap-5">
          <div class="flex items-center gap-5">
            <NuxtLink to="/">
              <img src="/tiptapLogo2.svg" class="w-[84px]" alt="" />
            </NuxtLink>
            <div class="font-[400] md:flex hidden">
              <NuxtLink to="/CustomersPage" class="btn-head-hover"
                >Customers</NuxtLink
              >
              <NuxtLink to="/EnterprisePage" class="btn-head-hover"
                >Enterprise</NuxtLink
              >
            </div>
          </div>
          <div class="font-[400] flex-i-center gap-1">
            <div class="md:hidden flex">
              <svg
                @click="isOpen = !isOpen"
                :class="
                  isOpen
                    ? 'rotate-90 transition-transform'
                    : 'rotate-0 transition-transform'
                "
                class="hover:rotate-90 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.5 12a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5m0 4.5A1.5 1.5 0 0 1 12 15a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 18a1.5 1.5 0 0 1-1.5-1.5m0-9A1.5 1.5 0 0 1 12 6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 9a1.5 1.5 0 0 1-1.5-1.5M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <UseModal
        :data-aos="isOpen ? 'flip-left' : 'flip-right'"
        v-if="isOpen"
        :isOpen="isOpen"
        @close="isOpen = false"
        class="md:hidden"
      />
    </div>
  </div>
</template>
