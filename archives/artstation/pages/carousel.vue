<script lang="ts" setup>
const column = 8;
const currentPage = ref(0);
const state = ref<number[][]>([]);
const containerWidth = 1000;
const columnWidth = 288;
const columnPerSlide = Math.floor(containerWidth / columnWidth);
const pages = Math.ceil(column / columnPerSlide);

onMounted(() => {
  var counter = 0;
  for (var i = 0; i < pages; i++) {
    var currentArray: number[] = [];
    for (var j = 0; j < columnPerSlide && counter++ < column; j++) {
      currentArray.push(j);
    }
    state.value = [...state.value, currentArray];
  }
});
</script>

<template>
  <div class="absolute top-0 left-0 border border-solid border-gray-400 p-4">
    <h1 class="font-bold text-xl mb-2">State</h1>
    <p>CurrentPage: {{ currentPage }}</p>
    <p>State: {{ JSON.stringify(state) }}</p>
  </div>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <div
      id="carousel-container"
      class="p-4 flex gap-4 w-[1000px] overflow-x-auto bg-gray-300 h-[500px]"
    >
      <div
        v-for="i in state[currentPage]"
        class="bg-green-400 h-full w-72 shrink-0"
      >
        {{ i }}
      </div>
    </div>
    <div class="flex gap-1">
      <button
        v-for="page in pages"
        @click="currentPage = page - 1"
        class="cursor-pointer p-1 block"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>
