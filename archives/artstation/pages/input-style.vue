<!-- Source: https://dev.to/bobbyiliev/how-to-remove-arrow-on-input-type-number-with-tailwind-css-5b0f -->

<template>
  <form class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
      <label for="quantity" class="block text-sm font-medium text-gray-700 mb-2"
        >Quantity</label
      >
      <input
        type="number"
        id="quantity"
        name="quantity"
        class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>

    <div class="mb-4">
      <label for="price" class="block text-sm font-medium text-gray-700 mb-2"
        >Price</label
      >
      <input
        type="number"
        id="price"
        name="price"
        step="0.01"
        class="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>

    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
    >
      Submit
    </button>
  </form>
</template>
