<!-- Reference: https://gumroad.com/ -->
<template>
  <main class="min-h-screen font-mabryPro">
    <div class="border-b-2 border-solid border-black py-[2rem] px-[2vw]">
      <img
        src="/images/gumroad/gumroad.svg"
        class="block w-full"
        alt="The Gumroad Logo"
      />
    </div>
    <div
      class="flex pl-[2vw] justify-between items-center border-b-2 border-solid border-black"
    >
      <nav>
        <ul class="flex items-center text-[1.1em]">
          <li><a href="" class="mx-[1.5em] inline-block">Features</a></li>
          <li><a href="" class="mx-[1.5em] inline-block">Pricing</a></li>
          <li><a href="" class="mx-[1.5em] inline-block">Blog</a></li>
          <li><a href="" class="mx-[1.5em] inline-block">Discover</a></li>
        </ul>
      </nav>
      <div class="flex">
        <a
          class="border-l-2 border-solid border-black py-[1.5rem] px-[3vw] inline-block hover:bg-[#ff90e8]"
          href=""
          >Login</a
        >
        <a
          class="border-l-2 border-solid border-black py-[1.5rem] px-[3vw] inline-block bg-black text-white hover:bg-[#ff90e8] hover:text-black"
          href=""
          >Start Selling</a
        >
      </div>
    </div>
    <section
      class="grid grid-cols-2 w-full border-b-2 border-solid border-black"
    >
      <article
        class="bg-[#ff90e8] text-[1.5em] p-[6.5vw] min-h-[22rem] h-full flex items-center border-r-2 border-solid border-black"
      >
        <div class="flex flex-col gap-12">
          <h1 class="-tracking-[.02em] leading-[.9] text-[7.525rem]">
            Go from <span class="whitespace-nowrap block">zero to $1</span>
          </h1>
          <p>
            With Gumroad, anyone can earn their first dollar online. <br />
            Just start with what you know, see what sticks, and get<br />paid.
            It's that easy.
          </p>
          <a
            class="w-[18rem] inline-block justify-self-start relative group hover:-translate-x-4 hover:-translate-y-4 transform transition-transform duration-200"
            style="transform-style: preserve-3d"
            href="https://app.gumroad.com/signup"
          >
            <div
              class="bg-black text-white text-center rounded pt-[1.1rem] px-[2rem] pb-[1.2rem]"
            >
              Start Selling
            </div>
            <div
              style="transform-style: preserve-3d"
              class="bg-[#f1f333] inset-0 w-full h-fill border-2 border-solid border-black rounded absolute group-hover:translate-x-4 group-hover:translate-y-4 transform -z-20 transition-transform duration-200"
            ></div>
            <div
              style="transform-style: preserve-3d"
              class="bg-[#ff90e8] w-full h-full border-2 border-solid border-black absolute inset-0 rounded group-hover:translate-x-2 group-hover:translate-y-2 transform -z-10 transition-transform duration-200"
            ></div
          ></a>
        </div>
      </article>
      <article
        class="bg-[#ffc900] text-[1.5em] p-[6.5vw] min-h-[22rem] h-full flex flex-col gap-12"
      ></article>
    </section>
    <section class="h-20"></section>
  </main>
</template>

<style scoped>
:root {
  --pink: #ff90e8;
}
</style>
