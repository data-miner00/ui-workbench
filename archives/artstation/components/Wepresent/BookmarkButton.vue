<script setup lang="tsx">
export type Theme = "whiteOutline" | "blackOutline" | "blackBackground";

const props = defineProps<{
  theme: Theme;
}>();

function styleBuilder(theme: Theme) {
  switch (theme) {
    case "blackBackground":
      return "border-black bg-black text-white hover:border-gray-700 hover:bg-gray-700";
    case "blackOutline":
      return "border-black text-black hover:border-gray-700";
    case "whiteOutline":
      return "border-white bg-black text-white hover:border-gray-300";
  }
}

const colorStyle = computed(() => styleBuilder(props.theme));
</script>

<template>
  <button
    class="h-11 w-11 border border-solid rounded-full grid place-items-center transition-colors duration-300"
    :class="colorStyle"
    aria-pressed="false"
  >
    <WepresentBookmark class="h-[14px] w-[14px] block" />
  </button>
</template>
