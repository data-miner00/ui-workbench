<!-- Adapted from: https://app.codecrafters.io/concepts/overview -->
<template>
  <div class="p-4">
    <div
      class="border rounded flex items-start p-4 border-green-400 bg-green-50 my-8"
      data-test-regional-discount-notice=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-8 h-8 mr-2 flex-shrink-0 text-green-400 transform scale-90"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <div class="py-1">
        <div class="text-green-700 text-sm leading-relaxed">
          Looks like you're from
          <b>Malaysia</b>. If you need it, you can opt-in for a PPP (Purchasing
          Power Parity) discount.
        </div>

        <div class="mt-3 flex items-center">
          <input
            id="ember24"
            class="ember-checkbox ember-view"
            data-test-apply-regional-discount-button=""
            type="checkbox"
          />
          <span class="text-green-700 text-sm ml-2">
            I'd like to apply a 50% discount.
          </span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-start gap-4 border border-teal-500 bg-teal-50 rounded shadow-sm p-4 w-full"
      data-test-share-concept-container=""
    >
      <span class="flex gap-2 items-center text-gray-700 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 text-teal-500"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path
            d="M9 11H3v5a2 2 0 002 2h4v-7zm2 7h4a2 2 0 002-2v-5h-6v7z"
          ></path>
        </svg>
        Learnt something new? Share it with a friend.
      </span>

      <div class="flex items-stretch w-full copyable-code">
        <div
          class="px-3 py-1.5 flex-grow-1 w-full overflow-x-auto border border-gray-300 border-r-0 rounded-l bg-white"
        >
          <span class="whitespace-nowrap font-mono text-gray-600 text-xs">
            https://app.codecrafters.io/concepts/overview
          </span>
        </div>

        <div class="relative flex items-stretch">
          <button
            class="bg-teal-600 px-3 py-1 text-white flex items-center rounded-r rounded-l-none text-sm font-bold"
            data-test-copy-button=""
            type="button"
          >
            COPY
          </button>
          <div
            class="absolute top-px bottom-px -left-6 w-6 bg-gray-300 border-text-mask"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
