<script setup lang="ts">
const perks: string[] = [
  "Unlimited links",
  "Dead link self-cleaning",
  "Paywall lists",
  "Custom domain",
  "Analytics",
];
</script>

<template>
  <div class="pt-[72px] px-[120px]">
    <div class="grid grid-cols-4 grid-rows-5 gap-3 max-w-[1200px] mx-auto">
      <div
        class="rounded-3xl flex flex-col gap-[72px] p-8 bg-orange-100 col-span-2 row-span-full"
      >
        <header class="flex">
          <div class="flex gap-8">
            <div class="flex gap-4">
              <div class="w-8 h-8">
                <svg
                  overflow="visible"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1000 1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1588_24076)">
                    <path
                      stroke-linejoin="miter"
                      fill="var(--token-6600fa93-cc62-455f-9e1d-d79f3d6793f6, rgb(249, 115, 21))"
                      d="M499.708 499.791C427.454 427.537 427.144 310.698 499.016 238.825C570.889 166.953 687.727 167.263 759.982 239.518C825.437 304.973 831.852 407.015 779.049 479.072C769.83 491.652 769.615 509.424 780.642 520.452L871.955 611.764C882.983 622.792 900.974 622.841 911.133 611.007C1035.53 466.108 1028.52 246.951 890.536 108.964C745.795 -35.7779 511.743 -36.3987 367.768 107.577C230.475 244.87 224.667 464.071 349.932 609.632C360.105 621.453 378.094 621.406 389.122 610.378L499.708 499.791Z"
                    ></path>
                    <path
                      stroke-linejoin="miter"
                      fill="var(--token-6600fa93-cc62-455f-9e1d-d79f3d6793f6, rgb(249, 115, 21))"
                      d="M499.292 500.209C571.546 572.464 571.856 689.302 499.984 761.175C428.111 833.047 311.273 832.737 239.018 760.483C173.563 695.027 167.148 592.985 219.951 520.928C229.17 508.348 229.385 490.577 218.358 479.549L127.045 388.236C116.017 377.208 98.0256 377.159 87.8668 388.993C-36.527 533.892 -29.524 753.049 108.464 891.037C253.205 1035.78 487.257 1036.4 631.232 892.423C768.525 755.13 774.333 535.929 649.068 390.368C638.895 378.547 620.906 378.594 609.878 389.622L499.292 500.209Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1588_24076">
                      <rect width="1000" height="1000" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div
                class="text-[20px] leading-6 -tracking-[0.06em] text-[rgb(32,32,32)] font-semibold"
              >
                Snack
              </div>
            </div>
            <div>
              <div>Pricing</div>
            </div>
          </div>
        </header>
        <section>
          <div class="max-w-[540px] flex flex-col gap-6">
            <h2 class="max-w-[388px] text-5xl -tracking-[0.06em] block">
              Curate, share and never forget your favorite links
            </h2>
            <p class="text-2xl text-gray-500 block">
              Save sites, recipes, inspiration—whatever you want, just save it
              and snack later.
            </p>
            <div class="flex gap-3">
              <button class="px-4 py-2 rounded-full bg-slate-900 text-white">
                Sign up for free
              </button>
              <button class="px-4 py-2 rounded-full bg-white">Login</button>
            </div>
            <ul>
              <li
                v-for="perk of perks"
                :key="perk"
                class="flex gap-2 items-center"
              >
                <div class="w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style="
                      user-select: none;
                      width: 100%;
                      height: 100%;
                      display: block;
                      fill: var(
                        --token-6600fa93-cc62-455f-9e1d-d79f3d6793f6,
                        rgb(249, 115, 21)
                      );
                      color: var(
                        --token-6600fa93-cc62-455f-9e1d-d79f3d6793f6,
                        rgb(249, 115, 21)
                      );
                      flex-shrink: 0;
                    "
                    focusable="false"
                    color="var(--token-6600fa93-cc62-455f-9e1d-d79f3d6793f6, rgb(249, 115, 21))"
                  >
                    <g
                      color="var(--token-6600fa93-cc62-455f-9e1d-d79f3d6793f6, rgb(249, 115, 21))"
                      weight="bold"
                    >
                      <path
                        d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"
                      ></path>
                    </g>
                  </svg>
                </div>

                <p class="block">{{ perk }}</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div
        class="rounded-3xl bg-red-100 col-start-3 row-start-1 col-span-1 row-span-4"
      ></div>
      <div
        class="rounded-3xl bg-pink-100 col-start-3 row-start-5 col-span-1 row-span-1"
      ></div>
      <div class="rounded-3xl bg-green-100 col-span-1 row-span-3"></div>
      <div class="rounded-3xl bg-blue-100 col-span-1 row-span-2"></div>
    </div>
  </div>
</template>
