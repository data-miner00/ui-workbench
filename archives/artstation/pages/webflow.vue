<script lang="ts" setup>
type NavLinks = {
  icon?: string;
  title: string;
  url?: string;
  backIcon?: string;
};

type NavSection = {
  title?: string;
  links: NavLinks[];
};

const sections: NavSection[] = [
  {
    links: [
      {
        title: "Home",
      },
      {
        title: "Search",
      },
    ],
  },
  {
    title: "Learn",
    links: [
      {
        title: "Courses",
      },
      {
        title: "Docs",
      },
      {
        title: "Videos",
      },
      {
        title: "Interactive learning",
      },
      {
        title: "Glossary",
      },
      {
        title: "Certifications",
      },
    ],
  },
  {
    title: "Engage",
    links: [
      {
        title: "Support",
      },
      {
        title: "Community",
      },
      {
        title: "Events",
      },
      {
        title: "Forum",
      },
    ],
  },
  {
    title: "Build",
    links: [
      {
        title: "New site",
      },
      {
        title: "Dashboard",
      },
    ],
  },
];
</script>

<template>
  <div class="bg-[#080808] p-[1.5rem] font-wf h-screen text-white">
    <nav
      class="w-[15.5rem] border border-solid border-[#363636] rounded flex flex-col sticky text-sm"
    >
      <header
        class="flex items-center min-h-[3rem] px-3 border-b border-solid border-[#363636]"
      >
        Webflow University
      </header>
      <section
        v-for="section in sections"
        class="py-3 border-b border-solid border-[#363636]"
      >
        <p
          v-if="section.title"
          class="uppercase text-[10px] tracking-[0.2rem] text-[#5a5a5a] px-3"
        >
          {{ section.title }}
        </p>
        <a
          v-for="link in section.links"
          class="flex my-[.125rem] py-1 px-3 hover:bg-[#222] group"
        >
          <div class="flex items-center">
            <div class="w-6 h-6 group-hover:text-[#146ef5]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 10.113V18C5.75 18.1381 5.86193 18.25 6 18.25H18C18.1381 18.25 18.25 18.1381 18.25 18V10.113C18.25 10.0412 18.2191 9.9728 18.1652 9.92534L12.1652 4.64522C12.0707 4.56212 11.9293 4.56212 11.8348 4.64522L5.83484 9.92534C5.78091 9.9728 5.75 10.0412 5.75 10.113Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
            </div>

            <span class="block ml-1">
              {{ link.title }}
            </span>
          </div>

          <div class="text-xs text-[#5a5a5a] ml-auto">↗</div>
        </a>
      </section>
      <section class="basis-32 flex p-3 items-end">
        <div
          class="bg-[#146ef5] rounded p-2 text-xs font-bold w-full text-center"
        >
          Try Webflow - it's free
        </div>
      </section>
      <section class="flex border-t border-solid border-[#363636] h-11">
        <div class="border-r border-solid border-[#363636] flex-1 h-full">
          <div></div>
        </div>
        <div class="border-r border-solid border-[#363636] flex-1 h-full">
          <div></div>
        </div>
        <div class="flex-1 h-full">
          <div></div>
        </div>
      </section>
    </nav>
  </div>
</template>
