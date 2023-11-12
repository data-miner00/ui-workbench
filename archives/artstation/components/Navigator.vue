<script setup lang="ts">
const isOpen = useState(() => false);
const search = useState(() => "");
const filteredEntries = useState<Entries>(() => []);

type Entry = {
  title: string;
  path: string;
  icon?: string;
  img?: string;
};

type Entries = Entry[];

const props = defineProps({
  entries: {
    type: Array as PropType<Entries>,
    required: false,
  },
});

onMounted(() => {
  if (props.entries) {
    filteredEntries.value = props.entries;
  }
});

watchEffect(() => {
  if (props.entries) {
    if (search.value === "") {
      filteredEntries.value = props.entries;
      return;
    }
    filteredEntries.value = props.entries.filter(
      (x) => x.title.toLowerCase().search(search.value.toLowerCase()) >= 0
    );
  }
});
</script>

<template>
  <Teleport to="body">
    <nav
      class="absolute top-5 left-5 rounded border border-solid border-gray-300 text-lg overflow-hidden shadow pb-2"
    >
      <div class="border-b border-solid border-gray-300 mb-2">
        <input
          type="text"
          placeholder="Search titles"
          class="block py-1 px-3 outline-none"
          v-model="search"
        />
      </div>
      <ul>
        <li>
          <NuxtLink
            to="/"
            class="px-3 py-1 hover:bg-gray-100 flex gap-2"
            exact-active-class="bg-gray-100"
          >
            <span class="block w-6">🏠</span><span>Home</span>
          </NuxtLink>
        </li>
        <li v-for="(entry, index) of filteredEntries" :key="index">
          <NuxtLink
            :to="entry.path"
            class="px-3 py-1 hover:bg-gray-100 flex gap-2"
            exact-active-class="bg-gray-100"
          >
            <span class="block w-6">🔥</span><span>{{ entry.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </Teleport>
</template>
