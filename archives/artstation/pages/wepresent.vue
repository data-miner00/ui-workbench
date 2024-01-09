<!-- Adapted from: https://wepresent.wetransfer.com/ -->
<script setup lang="ts">
const lastScrollTop = ref(0);
const headerHidden = ref(false);
const styleObject = computed(() => ({
  transform: `translate(0,${headerHidden.value ? "-100%" : "0"})`,
}));

onMounted(() => {
  window.addEventListener("scroll", () => {
    const isScrollingDown = window.scrollY - lastScrollTop.value > 0;

    if (isScrollingDown && !headerHidden.value) {
      headerHidden.value = true;
    } else if (!isScrollingDown && headerHidden.value) {
      headerHidden.value = false;
    }

    lastScrollTop.value = window.scrollY < 0 ? 0 : window.scrollY;
  });
});
</script>

<template>
  <div class="bg-[#f0f0f0] relative">
    <WepresentHeader
      class="top-0 left-0 w-full z-20 transform transition-transform duration-300 fixed"
      :style="styleObject"
    />

    <section class="bg-white rounded-br-3xl rounded-bl-3xl pb-24 mx-5">
      <div
        class="rounded-br-3xl rounded-bl-3xl overflow-hidden h-[calc(100dvh-40px)] relative"
      >
        <img
          alt="An image that looks like a photograph but is created with the use of Artificial Intelligence. The image has a 90s feel, showing a candid scene of a mother standing on a sunny, sandy beach, looking at the camera with her two young children next to her. Scattered around them are some toys in the sand."
          fetchpriority="high"
          decoding="async"
          data-nimg="fill"
          class="pointer-events-none"
          style="
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            color: transparent;
            object-fit: cover;
          "
          sizes="100vw"
          srcset="
            https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=640&amp;q=75   640w,
            https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=1080&amp;q=75 1080w,
            https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=1200&amp;q=75 1200w,
            https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=1650&amp;q=75 1650w,
            https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=1920&amp;q=75 1920w,
            https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=3000&amp;q=75 3000w
          "
          src="https://images.ctfassets.net/adaoj5ok2j3t/35A6P9i2q0VUbzNgekt7Ue/e3e68226f5545136897cc72607760f01/mariamavropoulou-wepresent-cover.jpg?fm=webp&amp;w=3000&amp;q=75"
        />
      </div>
      <div>
        <div class="mt-[100px]">
          <div
            class="grid grid-cols-[31%,1fr] px-10 w-[1200px] mx-auto justify-start gap-[42px]"
          >
            <div class="pt-4">
              <WepresentLogo class="h-[68px]" />
            </div>
            <div class="flex flex-col gap-12">
              <div class="default-info_info__wWKmS">
                <a
                  class="card-header_header__DV9Rz card-header_lg__9DVrp"
                  href="/stories/maria-mavropoulou-imagined-images"
                  ><div class="">
                    <h2
                      class="max-w-[22ch] text-[52px] leading-[1.25] -tracking-[0.02em]"
                    >
                      <span class="font-medium">Maria Mavropoulou</span>
                      <span class="font-clearface">
                        — How the artist used AI to rewrite her own family
                        history</span
                      >
                    </h2>
                  </div></a
                >
              </div>
              <div class="">
                <ul class="flex flex-wrap font-faktPro items-center gap-[10px]">
                  <li class="mr-8">
                    <span class="text-xs">COVER STORY</span>
                  </li>
                  <li class="">
                    <a
                      class="h-11 flex items-center border border-solid border-gray-800 rounded-full px-7 hover:border-gray-300 transition-colors duration-300"
                      aria-label="Identity tag page"
                      href="/tags/identity"
                      ><span
                        class="block text-xs leading-[1.5] tracking-normal overflow-hidden text-ellipsis whitespace-nowrap"
                        >Identity</span
                      ></a
                    >
                  </li>
                  <li class="">
                    <button
                      class="h-11 w-11 border border-solid border-gray-800 rounded-full grid place-items-center hover:border-gray-300 transition-colors duration-300"
                      aria-pressed="false"
                      aria-label='Add "Maria Mavropoulou - How the artist used AI to rewrite her own family history" to my list'
                    >
                      <WepresentBookmark class="h-[14px] w-[14px] block" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 rounded-3xl bg-white min-h-[300px] mx-5 mt-5">
      <!-- content here -->
    </section>
  </div>
</template>
