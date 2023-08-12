<script setup lang="ts">
// https://jvaluemall.com/
// issues faced: https://stackoverflow.com/questions/36946625/svg-element-width-and-height-set-in-html-but-appearing-as-0-0-in-inspector
const TODOS = ["Highlights", "Footer"];
</script>

<template>
  <div>
    <div class="bg-black font-serif text-center text-white py-6">
      <h2 class="text-4xl mb-2">Access</h2>
      <p class="text-sm">アクセス</p>
    </div>
    <div class="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d995.991229593818!2d101.639013!3d3.103976!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMDYnMTQuMyJOIDEwMcKwMzgnMjQuOCJF!5e0!3m2!1sja!2sjp!4v1691834265995!5m2!1sja!2sjp"
        class="w-full outline-none"
        height="600"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <article
        class="absolute top-0 left-0 w-[500px] flex flex-col items-center justify-center h-full"
      >
        <div class="mb-4">
          <img
            src="/images/jvalue/jvalue.svg"
            alt="JValue's logo"
            class="w-full block"
          />
        </div>
        <div class="w-[70%]">
          <p class="text-white leading-[1.8]">
            J Value Mallは「J Value Sdn. Bhd.」 が、クアラルンプール近郊
            Petaling Jayaに展開する 「All Japan
            Mall」31-35階の600坪と、Sheraton直結GF-7階の5,400坪の「計12フロア・6,000坪」で構成。31-35階から順に7月より順次稼働、GF階一部テナントは7月28日オープン
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
article {
  background-color: rgba(120, 0, 0, 0.5);
}
</style>
