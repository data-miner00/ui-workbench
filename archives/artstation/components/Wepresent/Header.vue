<script setup lang="ts">
const myListHover = ref(false);
const menuHover = ref(false);
</script>

<template>
  <div>
    <header
      class="flex justify-between h-[164px] items-start pt-[46px] px-10 mx-auto w-[1200px]"
    >
      <NuxtLink to="">
        <WepresentLogo class="w-[217px] text-white" />
      </NuxtLink>
      <nav class="flex gap-4 items-center">
        <button
          class="h-11 w-11 rounded-full bg-white grid place-items-center hover:border-gray-300 transition-colors duration-300"
        >
          <WepresentSearch class="h-3 w-3 block" />
        </button>
        <div class="flex rounded-full text-xs bg-white leading-[1.5]">
          <button
            @mouseover="myListHover = true"
            @mouseleave="myListHover = false"
            class="px-5 h-11 rounded-full boxed relative transition-[shadow,color] duration-300"
            :class="{ 'text-gray-400': menuHover }"
          >
            My list
          </button>
          <button
            @mouseover="menuHover = true"
            @mouseleave="menuHover = false"
            class="px-5 h-11 rounded-full boxed relative transition-[shadow,color] duration-300"
            :class="{ 'text-gray-400': myListHover }"
          >
            Menu
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.boxed:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
}
</style>
