<!-- Design for https://divriots.com/ -->
<!-- Interesting: Flicker between light and dark mode when scrolling through sections -->
<script setup lang="ts">
const colorMode = useColorMode();

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (id === "products-divider") {
        colorMode.preference = "light";
      } else {
        colorMode.preference = "dark";
      }
    });
  });

  document.querySelectorAll("hr").forEach((hr) => observer.observe(hr));
});

useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});
</script>

<template>
  <Attribution
    website="<div>RIOTS"
    dark-mode
    url="https://divriots.com"
    description="A slick company website"
    :inspirations="['ui', 'flickering dark mode', 'fonts']"
  />
  <div
    class="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
  >
    <main class="relative">
      <header
        class="absolute top-0 left-0 w-full flex items-center justify-between px-20 py-12"
      >
        <div
          class="text-4xl font-bold gb"
          @click="$colorMode.preference = 'dark'"
        >
          XXX
        </div>
        <nav class="text-lg">
          <ul class="flex gap-10">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <section
        id="hero"
        class="relative h-screen flex items-center justify-center"
      >
        <div class="text-8xl font-bold text-center gb">
          Front-end<br />
          is<br />
          back!
        </div>
        <a
          class="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex flex-col items-center"
          href="#intro"
        >
          <div class="hover:underline underline-offset-2">Scroll down</div>
          <div class="text-5xl transform rotate-90 gb chevron">></div>
        </a>
      </section>
      <hr id="hero-divider" />

      <section id="intro" class="h-screen flex justify-center items-center">
        <div class="max-w-screen-lg">
          <h1 class="gb mb-10 text-4xl">Greetings</h1>
          <p class="mb-10 text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea
            reprehenderit debitis nobis voluptas corrupti cum!
          </p>

          <p class="mb-10 text-4xl">
            Lorem ipsum dolor sit amet <strong class="gb">consectetur!</strong>
          </p>

          <p class="mb-10 text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            molestias doloremque fugiat illum!
          </p>

          <p class="mb-10 text-4xl">Lorem ipsum dolor sit.</p>
        </div>
      </section>
      <hr id="intro-divider" />

      <section id="products" class="h-screen flex justify-center items-center">
        <div class="max-w-screen-lg">
          <h1 class="gb mb-10 text-4xl">Products</h1>
          <p class="mb-10 text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <div
            class="mb-10 text-4xl w-full h-[500px] bg-gradient-to-tr from-black via-slate-800 to-slate-600 rounded-lg p-12 text-white flex"
          >
            <div class="basis-1/2">
              <h3 class="font-light text-4xl mb-10 tracking-widest">
                <span
                  class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600"
                  >Saas</span
                >
                <span>ering</span>
              </h3>

              <p class="text-2xl">
                <strong class="font-bold">Lorem ipsum</strong> dolor sit amet
                consectetur adipisicing elit. At facilis incidunt adipisci fugit
                explicabo! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Aperiam facere minus cupiditate, atque unde nobis? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Odio,
                repudiandae?
              </p>
            </div>

            <div class="basis-1/2"></div>
          </div>
        </div>
      </section>
      <hr id="products-divider" />

      <section id="others" class="h-screen flex justify-center items-center">
        <div class="max-w-screen-lg">
          <h1 class="gb mb-10 text-4xl">Others things</h1>
          <p class="mb-10 text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea
            reprehenderit debitis nobis voluptas corrupti cum!
          </p>

          <p class="mb-10 text-4xl">
            Lorem ipsum dolor sit amet <strong class="gb">consectetur!</strong>
          </p>

          <p class="mb-10 text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            molestias doloremque fugiat illum!
          </p>

          <p class="mb-10 text-4xl">Lorem ipsum dolor sit.</p>
        </div>
      </section>
      <hr id="others-divider" />
    </main>
  </div>
</template>

<style scoped>
hr {
  border-color: transparent;
}

.gb {
  font-family: "Good Brush", cursive;
}

.chevron {
  animation: 1.5s infinite anim-arrow;
}

@keyframes anim-arrow {
  0% {
    opacity: 0;
    transform: rotate(85deg) translate(-20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(85deg);
  }
}
</style>
