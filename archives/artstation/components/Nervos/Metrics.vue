<script setup lang="ts"></script>

<template>
  <div class="text-xs font-medium whitespace-nowrap leading-none">
    <div class="uppercase text-sm tracking-widest relative">
      <i
        class="inline-block h-[6px] w-[6px] bg-[#5700ff] rounded-full absolute top-1/2 transform -translate-y-1/2"
      >
      </i>
      <span class="block ml-4"> Live metrics </span>
    </div>
    <div class="flex mt-2 transform scale-[.916667] origin-left">
      <div>Live Cells</div>
      <div class="mx-2">|</div>
      <div class="text-[#5700ff] tracking-[.15em]">1,580,116</div>
    </div>
    <div class="flex mt-2 transform scale-[.916667] origin-left">
      <div>Common Knowledge Stored</div>
      <div class="mx-2">|</div>
      <span class="text-[#5700ff] tracking-[.15em]">155,856,630</span>
    </div>
    <div class="flex mt-2 transform scale-[.916667] origin-left">
      <div>CKB in Nervos DAO</div>
      <div class="mx-2">|</div>
      <div class="text-[#5700ff] tracking-[.15em]">10,132,321,185.23</div>
    </div>
  </div>
</template>

<style scoped>
i::after {
  position: absolute;
  top: -3px;
  left: -3px;
  display: block;
  width: 12px;
  height: 12px;
  border: 1px solid rgba(87, 0, 255, 20%);
  filter: drop-shadow(rgb(87 0 255) 0 0 2px);
  animation: zoominout 1s ease infinite;
  border-radius: 999px;
  content: "";
}

@keyframes zoominout {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
