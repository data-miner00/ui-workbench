<script setup lang="ts">
defineProps({
  links: Array,
});
</script>

<template>
  <nav class="">
    <ul>
      <li v-for="link in links">
        <a href="">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.7);
  padding: 48px;
}

nav ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

nav ul li {
  list-style-type: none;
}

nav ul li a {
  display: block;
  padding: 24px 48px;
  border: solid 1px black;
  text-align: center;
  width: 100px;
}
</style>
