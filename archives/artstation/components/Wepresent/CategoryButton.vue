<script setup lang="ts">
import type { Theme } from "./BookmarkButton.vue";

defineProps<{
  urlPath: string;
  theme: Theme;
}>();
</script>

<template>
  <a
    v-if="theme == 'blackOutline'"
    class="h-11 flex items-center border border-solid border-black rounded-full px-7 hover:border-gray-300 transition-colors duration-300"
    :href="urlPath"
  >
    <span
      class="block text-xs leading-[1.5] tracking-normal overflow-hidden text-ellipsis whitespace-nowrap"
    >
      <slot></slot>
    </span>
  </a>
  <a
    v-else
    class="h-11 flex items-center border border-solid border-black bg-black text-white rounded-full px-7 transition-colors duration-300"
    :href="urlPath"
  >
    <span
      class="block text-xs leading-[1.5] tracking-normal overflow-hidden text-ellipsis whitespace-nowrap"
    >
      <slot></slot>
    </span>
  </a>
</template>
