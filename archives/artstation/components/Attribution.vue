<script setup lang="ts">
const props = defineProps({
  website: String,
  url: String,
  description: String,
  inspirations: Array,
  darkMode: Boolean,
});

const borderColor = computed(() =>
  props.darkMode ? "border-gray-500" : "border-gray-600"
);

const buttonTheme = computed(() =>
  props.darkMode
    ? "bg-gray-700 text-white hover:bg-gray-600"
    : "bg-gray-100 hover:bg-gray-200 text-black"
);

const isOpen = useState(() => false);

function toggleAttribution() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed top-5 right-5 z-30">
      <div class="relative">
        <button
          @click="toggleAttribution"
          title="View attribution"
          class="h-8 w-8 flex items-center justify-center rounded-full opacity-60 hover:opacity-75"
          :class="buttonTheme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
        </button>

        <section
          v-if="isOpen"
          class="bg-black/80 border border-solid text-white absolute -bottom-36 right-0 px-3 py-2 rounded-lg w-[400px]"
          :class="borderColor"
        >
          <a
            :href="url"
            target="_blank"
            title="Visit site"
            class="flex items-center gap-2 mb-2 hover:text-sky-200 w-fit"
            ><span class="italic text-lg">{{ website }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </a>

          <div class="px-4 py-2 bg-gray-700/80 rounded mb-2">
            {{ description }}
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-xs">Inspired by: </span>
            <div class="flex gap-2 items-center">
              <span
                v-for="inspiration of inspirations"
                class="p-1 rounded bg-white text-black text-xs"
                >{{ inspiration }}</span
              >
            </div>
          </div>
        </section>
      </div>
    </div>
  </Teleport>
</template>
