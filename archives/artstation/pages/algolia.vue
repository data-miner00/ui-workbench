<!-- https://www.algolia.com/ -->
<script setup lang="ts">
type SearchHit = {
  category: string;
  hits: Array<string>;
};

const hits: SearchHit[] = [
  {
    category: "Composition API",
    hits: ["Composition API: Dependency Injection"],
  },
  {
    category: "Built-ins",
    hits: ["Built-in Directives"],
  },
  {
    category: "Reusability",
    hits: ["Custom Directives"],
  },
  {
    category: "Extra Topics",
    hits: ["Reactivity in Depth", "Virtual DOM"],
  },
  {
    category: "Best Practices",
    hits: ["Production Deployment", "Development vs. Production"],
  },
  {
    category: "Options API",
    hits: ["data", "directives", "deactivated"],
  },
];

const todos = ["keyboard binding", "mobile responsive", "keep states"];
</script>

<template>
  <div
    class="h-screen relative"
    style="background-color: rgba(101, 108, 133, 0.8)"
  >
    <div
      class="algolia absolute w-[560px] top-20 left-1/2 transform -translate-x-1/2 rounded overflow-hidden"
    >
      <header class="pt-4 px-4">
        <form
          class="flex border-green-500 h-14 border-solid border rounded px-3 items-center bg-white"
        >
          <label for="search_input" class="flex stroke-[1.4] text-green-500">
            <svg
              width="20"
              height="20"
              class="DocSearch-Search-Icon"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </label>
          <input
            name="search_input"
            type="text"
            placeholder="Search docs"
            class="w-[80%] flex-1 h-full pl-2 outline-none text-xl"
          />
          <button class="stroke-[1.4]" type="reset">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </form>
      </header>

      <section class="hits max-h-[488px] overflow-y-auto px-4 pb-4">
        <div v-for="hit in hits">
          <div class="pt-2 px-1 leading-8 text-sm font-semibold text-green-500">
            {{ hit.category }}
          </div>
          <ul>
            <li v-for="h in hit.hits" class="mb-1 group">
              <a
                href=""
                class="block px-3 py-4 bg-white text-gray-600 group-hover:bg-green-500 rounded group-hover:text-white shadow"
              >
                <div class="flex items-center">
                  <div class="stroke-[1.4]">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path
                        d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
                        stroke="currentColor"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1 ml-2 text-sm font-semibold">{{ h }}</div>
                  <div class="stroke-[1.4] text-white">
                    <svg class="" width="20" height="20" viewBox="0 0 20 20">
                      <g
                        stroke="currentColor"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                        <path d="M8 17l-6-6 6-6"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer
        class="flex flex-row-reverse justify-between h-11 px-3 items-center"
      >
        <div>
          <a
            href="https://www.algolia.com/ref/docsearch/?utm_source=vuejs.org&amp;utm_medium=referral&amp;utm_content=powered_by&amp;utm_campaign=docsearch"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center"
            ><span class="text-xs leading-6">Search by</span>
            <AlgoliaLogo />
          </a>
        </div>
        <ul class="flex items-center">
          <li class="flex items-center">
            <kbd>
              <svg width="15" height="15" aria-label="Enter key" role="img">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                >
                  <path
                    d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
                  ></path>
                </g>
              </svg>
            </kbd>
            <span>to select</span>
          </li>
          <li class="flex items-center">
            <kbd>
              <svg width="15" height="15" aria-label="Arrow down" role="img">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                >
                  <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
                </g>
              </svg>
            </kbd>
            <kbd>
              <svg width="15" height="15" aria-label="Arrow up" role="img">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                >
                  <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
                </g>
              </svg>
            </kbd>
            <span>to navigate</span>
          </li>
          <li class="flex items-center">
            <kbd>
              <svg width="15" height="15" aria-label="Escape key" role="img">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                >
                  <path
                    d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
                  ></path>
                </g>
              </svg>
            </kbd>
            <span>to close</span>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.algolia {
  --muted: rgba(60, 60, 60, 0.7);
  background-color: #f9f9f9;
  box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
}

.hits {
  scrollbar-color: var(--muted) transparent;
  scrollbar-width: thin;
}

footer li kbd {
  @apply flex mr-2 pb-px rounded-sm items-center justify-center;
  width: 20px;
  height: 18px;
}

footer li:not(:last-of-type) {
  margin-right: 0.8em;
}

footer {
  background-color: white;
  color: var(--muted);
  box-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}

footer li span {
  font-size: 0.75em;
  line-height: 1.6em;
}
</style>
