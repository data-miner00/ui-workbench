<script setup lang="ts">
const pictureRefs = ref<HTMLPictureElement[]>([]);
const interval = ref();

onMounted(() => {
  const numberOfPictures = pictureRefs.value.length;
  console.log(`Number of pictures loaded: ${numberOfPictures}`);

  // Initialize first picture
  pictureRefs.value[0].classList.add("current");

  // Looping picture carousel
  let counter = 1;
  interval.value = setInterval(() => {
    pictureRefs.value[
      (counter + (numberOfPictures - 1)) % numberOfPictures
    ].classList.remove("current");
    pictureRefs.value[counter++ % numberOfPictures].classList.add("current");
  }, 5000);
});

onUnmounted(() => clearInterval(interval.value));

const imgLinks = [
  {
    min1px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/mobile/mobile-1-m-2x.webp 1x, ",
    min481px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-1-2x.webp 1x, ",
    src: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-5-2x.webp",
  },
  {
    min1px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/mobile/mobile-2-m-2x.webp 1x, ",
    min481px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-2-2x.webp 1x, ",
    src: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-2-2x.webp",
  },
  {
    min1px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/mobile/mobile-3-m-2x.webp 1x, ",
    min481px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-3-2x.webp 1x, ",
    src: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-3-2x.webp",
  },
  {
    min1px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/mobile/mobile-4-m-2x.webp 1x, ",
    min481px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-4-2x.webp 1x, ",
    src: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-4-2x.webp",
  },
  {
    min1px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/mobile/mobile-5-m-2x.webp 1x, ",
    min481px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-5-2x.webp 1x, ",
    src: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-5-2x.webp",
  },
  {
    min1px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/mobile/mobile-7-m-2x.webp 1x, ",
    min481px:
      "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-7-2x.webp 1x, ",
    src: "https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/tablet-7-2x.webp",
  },
];
</script>

<template>
  <div class="h-[715px] bg-gray-100 rounded-[32px] p-3">
    <div class="h-full rounded-[22px] overflow-hidden relative">
      <picture
        v-for="imgLink in imgLinks"
        class="opacity-0 transition-opacity duration-1000 absolute left-0 top-0 h-full w-full"
        ref="pictureRefs"
      >
        <source media="(min-width: 481px)" :srcset="imgLink.min481px" />
        <source media="(min-width: 1px)" :srcset="imgLink.min1px" />

        <img
          :src="imgLink.src"
          alt="Illustration image of a website"
          loading="eager"
          fetchpriority="high"
        />
      </picture>
    </div>
  </div>
</template>

<style scoped>
.current {
  opacity: 1;
  z-index: 10;
}
</style>
