<script setup lang="ts">
type BillingSubject = {
  name: string;
  phone: string;
  address: string;
};

type BillingReceiver = {
  name: string;
  bankName: string;
  bankAccHolder: string;
  bankAccNumber: string;
  address: string;
};

type BillEntry = {
  item: string;
  quantity: number;
  unitPrice: number;
};

const invoiceNo = "A0001";
const date = "16 July 2023";

const items = [
  {
    item: "3B Sports Icon Medium Fit Tracksuit Jacket Double XL Premium Edition",
    quantity: 8,
    unitPrice: 125,
  },
  {
    item: "Bootcut Pants",
    quantity: 23,
    unitPrice: 10,
  },
  {
    item: "Crystal Mesh Top",
    quantity: 1,
    unitPrice: 300,
  },
  {
    item: "Medieval Knight's Armor",
    quantity: 1,
    unitPrice: 270,
  },
  {
    item: "Outline Tracksuit Jacket",
    quantity: 1,
    unitPrice: 200,
  },
] as Array<BillEntry>;

const subtotal = items
  .map((x) => x.quantity * x.unitPrice)
  .reduce((x, y) => x + y);

const tax = 1;
const taxAmt = (subtotal * tax) / 100;
const total = subtotal + taxAmt;

const billingSubject: BillingSubject = {
  name: "Steven Jones",
  phone: "+6510-01010100",
  address: "No. 4, Orchard Road, Singapore.",
};

const billingReceiver: BillingReceiver = {
  name: "Hazel Nguyen",
  bankName: "Hilton Bank",
  bankAccHolder: "Hazel Nguyen",
  bankAccNumber: "63534283736",
  address: "71 Cherry Court Southampton, UK.",
};
</script>

<template>
  <div class="h-screen mx-auto w-[700px] bg-orange-50 relative">
    <div class="absolute uppercase text-5xl font-serif top-16 right-20">
      Invoice
    </div>

    <div class="absolute left-20 top-36">
      <div class="uppercase font-bold mb-4">Billed to:</div>
      <address class="not-italic">
        <div>{{ billingSubject.name }}</div>
        <div>{{ billingSubject.phone }}</div>
        <div>{{ billingSubject.address }}</div>
      </address>
    </div>

    <div class="absolute right-20 top-44 text-right">
      <div>Invoice No. {{ invoiceNo }}</div>
      <div>{{ date }}</div>
    </div>

    <div class="absolute left-20 top-[300px] right-20">
      <table class="w-full">
        <thead class="text-left">
          <tr class="border-b border-t-2 border-solid border-black">
            <th class="py-2">Item</th>
            <th class="py-2">Quantity</th>
            <th class="py-2">Unit Price</th>
            <th class="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in items" class="border-b border-solid border-black">
            <td class="max-w-[280px] py-2 pr-2">{{ entry.item }}</td>
            <td class="py-2 pr-2">{{ entry.quantity }}</td>
            <td class="py-2 pr-2">
              <span class="text-xs">RM</span>{{ entry.unitPrice }}
            </td>
            <td class="py-2">
              <span class="text-xs">RM</span
              >{{ entry.quantity * entry.unitPrice }}
            </td>
          </tr>
          <tr>
            <td class="py-3"></td>
            <td class="py-3"></td>
            <td class="font-semibold py-3">Subtotal</td>
            <td class="py-3"><span class="text-xs">RM</span>{{ subtotal }}</td>
          </tr>
          <tr>
            <td class="py-3"></td>
            <td class="py-3"></td>
            <td class="font-semibold py-3">Tax ({{ tax }}%)</td>
            <td class="py-3"><span class="text-xs">RM</span>{{ taxAmt }}</td>
          </tr>
          <tr>
            <td class="py-3"></td>
            <td class="py-3"></td>
            <td
              class="font-bold text-lg py-3 border-t border-solid border-black"
            >
              Total
            </td>
            <td
              class="font-bold text-lg py-3 border-t border-solid border-black"
            >
              RM{{ total }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="absolute left-20 bottom-60 text-3xl">Thank you!</div>

    <div class="absolute left-20 bottom-20">
      <div class="font-semibold uppercase mb-4">Payment Information</div>
      <div>{{ billingReceiver.bankName }}</div>
      <div>Account Name: {{ billingReceiver.bankAccHolder }}</div>
      <div>Account No: {{ billingReceiver.bankAccNumber }}</div>
    </div>

    <div class="absolute right-20 bottom-20">
      <div class="text-cursive text-2xl text-right">
        {{ billingReceiver.name }}
      </div>
      <div class="">{{ billingReceiver.address }}</div>
    </div>
  </div>
</template>
