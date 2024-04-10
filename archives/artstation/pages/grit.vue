<!-- Reference: https://wesbos.com/tagged-template-literals -->

<template>
  <div class="min-h-screen bg-gray-200 p-24">
    <h1 class="text-3xl font-bold border-2 border-solid border-black">
      Hover on this title
    </h1>
  </div>
</template>

<style scoped>
h1 {
  background: url(/images/grit/blackgrit.png) 0% 0% / 600px;
  padding: 2rem 2rem 2rem 2rem;
  position: relative;
}

h1:hover {
  animation: 2s steps(10) 0s infinite normal none running egQcBp;
}

@keyframes egQcBp {
  0% {
    background-position: 0px center;
  }
  100% {
    background-position: -600px center;
  }
}
</style>
