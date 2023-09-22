<script setup lang="ts">
const links = [
  "Showcase",
  "Docs",
  "Blog",
  "Analytics",
  "Templates",
  "Enterprise",
];
</script>

<template>
  <header
    class="sticky top-0 flex flex-col justify-around items-center w-full z-20 px-6 h-16 backdrop-saturate-[180%] backdrop-blur-[5px] bg-[hsla(0,0%,100%,.8)] border-b border-solid border-[hsla(0,0%,0%,0.05)]"
  >
    <nav class="max-w-[1400px] w-full relative flex-1 items-center flex">
      <div class="gap-6 w-full flex items-center">
        <NextjsLogo />
        <a
          v-for="(link, index) of links"
          :key="index"
          class="transition-colors duration-150 text-[#666] rounded-[2px] text-sm relative first-of-type:ml-5 hidden lg:block"
        >
          {{ link }}
          <svg
            v-if="index >= 3"
            aria-hidden="true"
            class="absolute top-[2px] -right-[10px] block"
            height="7"
            viewBox="0 0 6 6"
            width="7"
          >
            <path
              d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
              fill="#999"
            ></path>
          </svg>
        </a>
      </div>
      <div class="lg:flex items-center gap-3 hidden">
        <button
          class="w-[251px] h-8 rounded-[6px] pr-[6px] pl-2 whitespace-nowrap text-sm transition-colors duration-150 flex items-center justify-between text-[rgb(143,143,143)] bg-[rgb(242,242,242)]"
          type="button"
        >
          Search documentation...<kbd
            class="h-[22px] leading-[22px] rounded px-[6px] text-xs font-medium border border-solid border-[rgba(0,0,0,.08)] ml-4 bg-white text-[hsl(0,0%,40%)] font-inter"
            >CtrlK</kbd
          >
        </button>
        <a
          class="border border-solid border-[rgba(0,0,0,.08)] rounded-[6px] font-medium px-3 flex justify-center items-center transition-color duration-150 hover:bg-[hsl(0,0%,92%)] h-8 text-sm"
        >
          <span class="flex mr-[10px]"
            ><svg
              aria-label="Vercel logomark"
              height="13"
              role="img"
              style="width: auto; overflow: visible"
              viewBox="0 0 74 64"
            >
              <path
                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                fill="var(--geist-foreground)"
              ></path></svg
          ></span>
          <span
            class="whitespace-nowrap overflow-hidden inline-block text-ellipsis"
            >Deploy</span
          >
        </a>

        <a
          class="flex rounded-[6px] bg-[rgb(23,23,23)] text-white text-sm h-8 items-center justify-center transition-colors duration-150 px-3 font-medium hover:bg-[#383838]"
        >
          <span
            class="whitespace-nowrap overflow-hidden inline-block text-ellipsis"
            >Learn</span
          >
        </a>
      </div>
      <div class="flex lg:hidden items-center">
        <button class="w-9 flex items-center justify-center" type="button">
          <svg
            class="with-icon_icon__MHUeb"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            style="color: currentColor"
          >
            <path
              d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"
            ></path>
            <path d="M16 16l4.5 4.5"></path>
          </svg>
        </button>
        <button
          aria-label="open menu"
          class="flex items-center justify-center cursor-pointer h-9 w-9 -mr-[5px] ml-[5px] rounded-[7px]"
          type="button"
        >
          <div
            class="before:block before:h-[1.5px] before:w-[22px] after:transition-transform after:duration-150 after:block after:w-[22px] after:h-[1.5px] after:translate-y-1 before:bg-black after:bg-black before:transition-transform before:duration-150 before:-translate-y-1"
          ></div>
        </button>
      </div>
    </nav>
  </header>
</template>
