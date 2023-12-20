<script setup lang="ts">
const navLinks = [
  {
    title: "Playground",
    path: "/playground",
  },
  {
    title: "koreanfeels",
    path: "/koreanfeels",
  },
  {
    title: "Algolia",
    path: "/algolia",
  },
  {
    title: "Pirate King",
    path: "/pirate",
  },
  {
    title: "Wordpress",
    path: "/wordpress",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Next.js",
    path: "/nextjs",
  },
  {
    title: "Nervos",
    path: "/nervos",
  },
  {
    title: "Sorting",
    path: "/sorting",
  },
  {
    title: "Hasura",
    path: "/hasura",
  },
  {
    title: "Gackt",
    path: "/gackt",
  },
];
</script>

<template>
  <div class="w-screen h-screen">
    <Navigator :entries="navLinks" />
  </div>
</template>
