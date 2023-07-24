<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  popupDelay: {
    type: Number,
    default: 5000,
  },
});

const isPopupOpen = useState(() => false);

onMounted(() => {
  setTimeout(() => {
    const isPopped = localStorage.getItem("popped");

    if (!isPopped) {
      isPopupOpen.value = true;
      localStorage.setItem("popped", "true");
    }
  }, props.popupDelay);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isPopupOpen"
      class="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50"
    >
      <div class="h-full w-full relative">
        <article
          role="dialog"
          aria-labelledby="dialogTitle"
          aria-describedby="dialogDesc"
          class="h-[500px] w-[700px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xs"
        >
          <div class="relative w-full h-full">
            <h2 id="dialogTitle">{{ title }}</h2>
            <p id="dialogDesc">{{ paragraph }}</p>

            <button
              class="absolute right-5 top-5 hover:text-gray-600 text-gray-400 flex items-center justify-center"
              aria-label="Close"
              @click="isPopupOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                />
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </Teleport>
</template>
