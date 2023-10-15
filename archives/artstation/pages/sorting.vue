<script setup lang="ts">
type Item = {
  id: number;
  name: string;
  manufacturer: string;
  year: number;
  isBroken: boolean;
};

type SortOrder = "asc" | "desc";
type SortableColumn = "id" | "name" | "manufacturer" | "year" | "isBroken";

const currentOrder = useState<SortOrder>("currentOrder", () => "asc");
const currentColumn = useState<SortableColumn>("currentColumn", () => "id");

const rawItems = useState<Item[]>("rawItems", () => [
  {
    id: 1,
    name: "Yankee Boar",
    manufacturer: "FLP Pte Ltd",
    year: 1998,
    isBroken: true,
  },
  {
    id: 2,
    name: "Paper Gold",
    manufacturer: "Golden Manufacturer",
    year: 1700,
    isBroken: false,
  },
  {
    id: 3,
    name: "Yankee Boar",
    manufacturer: "FLP Pte Ltd",
    year: 2020,
    isBroken: false,
  },
  {
    id: 4,
    name: "Mankee Boar",
    manufacturer: "FLP Pte Ltd",
    year: 2008,
    isBroken: true,
  },
  {
    id: 5,
    name: "Yankee Boaz",
    manufacturer: "Company Ltd",
    year: 1958,
    isBroken: true,
  },
  {
    id: 6,
    name: "Flyweight",
    manufacturer: "Refactoring Guru",
    year: 2300,
    isBroken: false,
  },
  {
    id: 7,
    name: "Wheatstone Bridge",
    manufacturer: "Capicitorz Labs",
    year: 1960,
    isBroken: false,
  },
]);

const items = computed<Item[]>(() => {
  const newItems = [...rawItems.value];
  newItems.sort((a, b) => {
    const x = a[currentColumn.value];
    const y = b[currentColumn.value];
    if (currentOrder.value === "asc") {
      return x > y ? 1 : x < y ? -1 : 0;
    } else {
      return y > x ? 1 : y < x ? -1 : 0;
    }
  });

  return newItems;
});

function changeOrdering() {
  if (currentOrder.value === "asc") {
    currentOrder.value = "desc";
  } else {
    currentOrder.value = "asc";
  }
}

function changeOrderingColumn(sortableColumn: SortableColumn) {
  if (currentColumn.value !== sortableColumn)
    currentColumn.value = sortableColumn;
  else changeOrdering();
}
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th @click="changeOrderingColumn('id')">Id</th>
          <th @click="changeOrderingColumn('name')">Name</th>
          <th @click="changeOrderingColumn('manufacturer')">Manufacturer</th>
          <th @click="changeOrderingColumn('year')">Year</th>
          <th @click="changeOrderingColumn('isBroken')">Is broken</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of items" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.manufacturer }}</td>
          <td>{{ item.year }}</td>
          <td>{{ item.isBroken ? "Broken" : "Impeccable" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
