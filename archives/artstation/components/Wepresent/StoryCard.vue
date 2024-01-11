<script setup lang="ts">
import type { Theme } from "./BookmarkButton.vue";

defineProps<{
  author: string;
  title: string;
  category: string;
  urlPath: string;
  imgUrl: string;
  color: string;
  variant: "normal" | "full";
  showCategory: boolean;
  label: string;
  outlineColor: string;
  theme: Theme;
}>();
</script>

<template>
  <article
    v-if="variant == 'normal'"
    class="rounded-[20px] flex flex-wrap p-[25px] gap-[22px] relative h-[460px] flex-col text-[18px] leading-[1.5] overflow-hidden"
    :style="{ backgroundColor: color, color: outlineColor }"
    style="box-shadow: 0px 10px 19px 7px rgb(33 35 36/4%)"
  >
    <span
      class="relative -mt-[25px] -mx-[25px] block h-[341px] overflow-hidden"
    >
      <img class="absolute inset-0 object-center object-cover" :src="imgUrl" />
    </span>

    <div class="flex gap-[22px] items-center justify-between">
      <a href="" class="grid gap-2 after:absolute after:inset-0">
        <h3 class="max-w-[26ch] min-w-[14ch] -my-[4.5px]">
          {{ author }}
          <span class="font-clearface -tracking-[0.025em]"> — {{ title }}</span>
        </h3>
      </a>
      <ul class="flex basis-auto flex-wrap items-center gap-[10px] list-none">
        <li v-if="showCategory">
          <WepresentCategoryButton
            url-path=""
            aria-label=""
            theme="blackOutline"
            >{{ category }}</WepresentCategoryButton
          >
        </li>
        <li>
          <WepresentBookmarkButton :theme="theme" />
        </li>
      </ul>
    </div>
  </article>
  <article
    v-else
    class="rounded-[20px] flex flex-wrap p-[25px] gap-[92px] relative h-[387px] text-[18px] leading-[1.5] overflow-hidden"
    :style="{ backgroundColor: color }"
    style="box-shadow: 0px 10px 19px 7px rgb(33 35 36/4%)"
  >
    <span
      class="relative -ml-[25px] -my-[25px] overflow-hidden"
      style="flex: 0 0 46%"
    >
      <img
        class="absolute inset-0 object-center object-cover h-full"
        :src="imgUrl"
      />
    </span>

    <div class="flex gap-[48px] justify-center flex-col">
      <a href="" class="grid gap-2 after:absolute after:inset-0">
        <h3
          class="max-w-[22ch] min-w-[14ch] text-4xl leading-[1.25] -my-[4.5px] -tracking-[0.02em]"
        >
          {{ author }}
          <span class="font-clearface -tracking-[0.025em]"> — {{ title }}</span>
        </h3>
      </a>
      <ul
        class="flex basis-auto flex-wrap items-center gap-[10px] list-none text-[18px]"
      >
        <li class="mr-8">
          <span class="text-xs leading-[1.5]">{{ label }}</span>
        </li>
        <li v-if="showCategory">
          <WepresentCategoryButton
            url-path=""
            aria-label=""
            theme="blackOutline"
            >{{ category }}</WepresentCategoryButton
          >
        </li>
        <li>
          <WepresentBookmarkButton :theme="theme" />
        </li>
      </ul>
    </div>
  </article>
</template>
