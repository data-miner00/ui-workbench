<!-- https://wordpress.com/-->
<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-[#fdfdfd]",
  },
});
</script>

<template>
  <header
    class="fixed top-0 left-0 px-6 py-3 w-full flex justify-between items-center text-[#003c56] font-semibold bg-[#fdfdfd]"
  >
    <nav>
      <ul class="flex gap-8 items-center">
        <li class="text-lg">Wordpress.com</li>

        <li>Products</li>
        <li>Features</li>
        <li>Resources</li>
        <li>Plans & Pricing</li>
      </ul>
    </nav>
    <nav>
      <ul class="flex gap-8 items-center">
        <li>Log In</li>
        <li>Get Started</li>
      </ul>
    </nav>
  </header>
  <main class="pt-36">
    <section class="max-w-[1190px] mx-auto p-12">
      <h1 class="text-[66px] font-semibold mb-8 leading-[1.1em]">
        <span>Welcome to the world's</span
        ><span>most popular website builder.</span>
      </h1>
      <div class="max-w-[865px] mb-[40px]">
        <p class="text-lg">
          43% of the web is built on WordPress. More bloggers, small businesses,
          and Fortune 500 companies use WordPress than all other options
          combined. Joined the millions of people that call WordPress.com home.
        </p>
      </div>

      <div
        class="bg-[#0675c4] rounded-[4px] py-[14px] px-[34px] mb-3 font-medium text-white mr-[14px] w-fit"
      >
        Get started
      </div>

      <div class="mt-[65px]">
        <WordpressCarousel />
      </div>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-family: "Recoleta", serif;
}

h1 span {
  @apply inline-block;
}
</style>
