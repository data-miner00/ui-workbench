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
  {
    title: "WePresent",
    path: "/wepresent",
  },
  {
    title: "Studio UXPin",
    path: "/studio-uxpin",
  },
  {
    title: "Afk",
    path: "/afk",
  },
  {
    title: "Gumroad",
    path: "/gumroad",
  },
  {
    title: "Grit",
    path: "/grit",
  },
  {
    title: "Box",
    path: "/box",
  },
  {
    title: "Input Style",
    path: "/input-style",
  },
];
</script>

<template>
  <div class="w-screen h-screen">
    <Navigator :entries="navLinks" />
  </div>
</template>
