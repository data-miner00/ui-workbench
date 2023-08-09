<script setup lang="ts">
// https://thekdaily.com/
const links = [
  "Kpop News 韩星韩剧",
  "Food 美食甜品",
  "Travel 旅游玩乐",
  "Kstyle 流行小物",
];
</script>

<template>
  <div class="">
    <header class="bg-[#f16371] relative">
      <nav
        class="h-16 bg-white flex justify-center items-center text-[12px] leading-[16.8px] mb-[10px]"
        style="box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10196)"
      >
        <div class="h-[40px] mx-9 text-ellipsis whitespace-nowrap">
          <a class="leading-[40px]">关于集团</a>
        </div>
        <div class="h-[40px] mx-9 text-ellipsis whitespace-nowrap">
          <a class="leading-[40px]">集团品牌</a>
        </div>
        <div class="h-[40px] mx-9 text-ellipsis whitespace-nowrap">
          <a href="https://www.presslogic.ai/" target="_blank"
            ><img
              src="https://assets.presslogic.com/static/images/logo/presslogic-logo.svg"
              alt="presslogic-logo"
          /></a>
        </div>
        <div class="h-[40px] mx-9 text-ellipsis whitespace-nowrap">
          <a class="leading-[40px]">广告洽谈</a>
        </div>
        <div class="h-[40px] mx-9 text-ellipsis whitespace-nowrap">
          <a class="leading-[40px]">工作机会</a>
        </div>
      </nav>
      <section class="h-[122px] relative">
        <a
          href="/"
          aria-current="page"
          class="app-header__home-link nuxt-link-exact-active nuxt-link-active"
          title="Kdaily 韓粉日常"
          ><img
            src="https://assets.presslogic.com/presslogic-hk-tk/static/images/layout-logo.png"
            srcset="
              https://assets.presslogic.com/presslogic-hk-tk/static/images/layout-logo@2x.png 2x,
              https://assets.presslogic.com/presslogic-hk-tk/static/images/layout-logo@3x.png 3x
            "
            id="logo"
            alt="Kdaily 韓粉日常"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        /></a>
        <div class="flex items-center max-w-[1085px] mx-auto h-16 px-[10px]">
          <div class="ml-auto flex items-center min-h-[32px] px-[10px]">
            <a href="/search" class="mr-4" aria-label="search"
              ><img
                src="https://assets.presslogic.com/presslogic-hk-tk/static/images/header-icon-search.svg"
                class="header-search-link__icon"
            /></a>
            <a
              href="https://www.facebook.com/thekdaily/"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4"
              ><img
                src="https://assets.presslogic.com/presslogic-hk-tk/static/images/header-icon-facebook.svg"
                alt="facebook"
                class="top-header-nav__icon"
            /></a>
            <a
              href="https://www.instagram.com/the_kdaily/"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-4"
              ><img
                src="https://assets.presslogic.com/presslogic-hk-tk/static/images/header-icon-instagram.svg"
                alt="instagram"
                class="top-header-nav__icon"
            /></a>
          </div>
        </div>
      </section>
    </header>
    <section class="min-h-screen" style="background: rgb(247, 247, 247)">
      <nav class="pt-[30px] pb-[20px] px-4 max-w-[1085px] w-[750px] mx-auto">
        <ul class="text-center">
          <li v-for="link of links" class="inline-block align-middle">
            <a
              href=""
              class="block leading-5 py-[13px] px-[18px] text-[14px]"
              >{{ link }}</a
            >
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>
