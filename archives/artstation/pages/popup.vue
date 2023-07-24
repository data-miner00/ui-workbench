<template>
  <div class="root relative h-screen w-full">
    <Popup
      title="This is a title"
      paragraph="Very cool huh."
      :popupDelay="3000"
    />

    <header class="border-b border-solid border-black">
      <h1
        class="text-5xl font-serif tracking-wide font-light text-center block my-auto py-7"
      >
        lxml
      </h1>
    </header>

    <div class="flex flex-wrap gap-10 p-10">
      <div v-for="i of 100">
        <div
          class="h-20 w-20 border border-solid border-black"
          :class="{ 'bg-black': i % 10 === 0 }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lugrasimo&display=swap");

h1 {
  font-family: "Lugrasimo", cursive;
}
</style>
