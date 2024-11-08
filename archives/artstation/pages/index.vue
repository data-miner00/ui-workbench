<script setup lang="ts">
import type { Entries } from "~/models/entry";

const navLinks: Entries = [
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
  {
    title: "Carousel",
    path: "/carousel",
  },
  {
    title: "Blobs",
    path: "/blobs",
  },
  {
    title: "Snack",
    path: "/snack",
  },
  {
    title: "Marquee",
    path: "/marquee",
  },
];
</script>

<template>
  <div class="w-screen h-screen">
    <Navigator :entries="navLinks" />
  </div>
</template>
