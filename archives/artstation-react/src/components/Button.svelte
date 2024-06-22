<script>
  export let count = 0;
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  class="m-5 px-4 py-2 rounded text-white bg-orange-600"
>
  count is {count}
</button>
