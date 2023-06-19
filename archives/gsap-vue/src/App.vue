<script setup lang="ts">
import { gsap, Power2 } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const t1 = gsap.timeline({ repeat: 2, repeatDelay: 1 });

  const random = gsap.utils.random(10, 100);

  t1.to("#helo", { duration: 1, x: random }, "-=0.5");
  t1.to("#helo", { duration: 1, x: 50 }, "-=0.5");
  t1.to("#helo", { duration: 1, opacity: 0 }, "-=0.5");
  t1.play();

  gsap.utils.shuffle([1, 2, 3, 4, 5]);
  gsap.utils.snap(10, 23.5);
});
</script>

<template>
  <div id="helo">Hello from gsap</div>
</template>

<style scoped></style>
