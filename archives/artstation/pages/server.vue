<script lang="ts" setup>
const res = useFetch("/api/action");
const action = ref(res.data.value);
</script>

<template>
  <div>
    <p class="text-primary">{{ action?.action }}</p>
  </div>
</template>
