<script setup lang="ts">
// The usage of `has-` selector is not ready yet as of this commit - replaced with states
const selected = useState(() => "public");

const options = [
  {
    id: 1,
    value: "public",
    label: "Public Access",
  },
  {
    id: 2,
    value: "private",
    label: "Private to project members",
  },
  {
    id: 3,
    value: "private-you",
    label: "Private to you",
  },
];
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center px-4 text-sm/6 accent-white"
  >
    <div class="mx-auto max-w-xl space-y-1">
      <label
        v-for="option of options"
        :key="option.id"
        class="flex items-start gap-x-4 rounded-lg px-5 py-4 text-zinc-950 transition has-[:checked]:bg-indigo-500 group"
        :class="
          selected === option.value ? 'bg-indigo-500' : 'hover:bg-zinc-100'
        "
      >
        <div class="flex h-6 flex-none items-center">
          <input
            type="radio"
            class="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-white"
            name="visibility"
            :value="option.value"
            :defaultChecked="option.id === 1"
            v-model="selected"
          />
        </div>
        <div>
          <div
            class="font-semibold group-has-[:checked]:text-white"
            :class="{ 'text-white': selected === option.value }"
          >
            {{ option.label }}
          </div>
          <div
            class="mt-1 group-has-[:checked]:text-gray-300"
            :class="
              selected === option.value ? 'text-indigo-200' : 'text-gray-500'
            "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
            inventore!
          </div>
        </div>
      </label>
    </div>
  </div>
</template>
