<!-- A complete ripoff from koreanfeels (https://koreanfeels.tumblr.com/post/20880932023/clausal-connective-%EC%96%B4%EC%84%9C%EC%95%84%EC%84%9C) -->
<!-- Interesting: Simple miniminalistic and aesthetic blog style -->
<script setup lang="ts">
const isMetaShown = useState(() => false);

useHead({
  bodyAttrs: {
    class: "bg-gray-50",
  },
});

const todo = ["make mobile responsive", "improve sidebar"];
</script>

<template>
  <Attribution
    website="koreanfeels"
    url="https://koreanfeels.tumblr.com/post/20880932023/clausal-connective-%EC%96%B4%EC%84%9C%EC%95%84%EC%84%9C"
    description="A Korean learning blog website article"
    :inspirations="['fonts', 'minimal']"
  />
  <div class="max-w-[860px] pt-[40px] pl-[40px]">
    <header class="mb-[60px] ml-[220px]">
      <hgroup class="font-mono">
        <a href="#" class="text-6xl mb-4 block">koreanfeels</a>
        <p class="text-[22px]">
          documenting my feels about learning the korean language. part
          study-aid, part journal.
        </p>
      </hgroup>
    </header>
    <div class="flex gap-5 justify-between">
      <div>
        <aside class="border-r-2 border-solid border-gray-300 pr-5">
          <nav class="text-[22px] text-gray-700 text-right">
            <ul>
              <li>about</li>
              <li>korean vocab</li>
              <li>korean grammar</li>
              <li>ask</li>
              <li>archive</li>
              <li>rss</li>
              <li>search</li>
            </ul>
          </nav>
        </aside>
      </div>
      <article class="max-w-[600px]">
        <h1>Clausal Connective: ~어서/아서</h1>
        <h2>The Textbook Explanation:</h2>
        <p>
          Clausal connectives do just that: they connect two clauses together.
          There are a variety of different connectives that allow you to specify
          the nature of the connection between two phrases.
        </p>
        <p>
          The 어서/아서 connective functions a bit like the English conjunctions
          because or so. In Korean, the 어서/아서 clause provides clausal
          information for the clause that follows it.
        </p>
        <p>
          Deciding weather to use 어서 or 아서 follows the same rule as
          polite-form endings: 아서 if the stem has 아 or 오, and 어서
          otherwise.
        </p>
        <p>Let's look at some examples:</p>
        <ul>
          <li>
            <strong>재미있어서</strong> 한국어를 배워요. - I am learning Korean
            <strong>because it is fun</strong>.
          </li>
          <li>
            <strong>학교가 멀어서</strong> 버스를 타요. - I take the bus
            <strong>because school is far away</strong>.
          </li>
          <li>
            <strong>시험이 봐서</strong> 공부 열심히 해요. - I am studying hard
            <strong>because I have a test</strong>.
          </li>
        </ul>

        <p>
          Note that the placement of the casual phrase is opposite to English;
          it appears <em>before</em> the main clause rather than after.
        </p>
        <p>
          ~어서/아서 can also function like <em>for</em> in fixed phrases such
          as 늣어서 죄송합니다 ("I am sorry for being late"), which could more
          literally be translated as "I am sorry because I am late."
        </p>
        <p>
          When speaking in the past tense, 어서/아서 does not take a tense
          marker; only the main clause does. Thus:
        </p>

        <ul>
          <li>
            시험이 봐서 공부 열심히 했어요. - I studies hard because I had a
            test.
          </li>
        </ul>

        <h2>My Feels:</h2>

        <p>This is pretty straighforward as far as connectives go.</p>

        <p>
          I just wish that the (이)라서 connective was taught in the same
          chapter, instead of four chapters later... 어서/아서 doesn't combine
          with the 이다/아니다 copulas, and I sounded like an idiot in class
          trying to say "I'm going to school because it's Monday" using
          어서/아서...
        </p>
        <p>
          For reference, 이다 and 아니다 use the connective (이)라서. As in,
          "월요일이라서 학교에 가요."
        </p>
        <footer
          class="h-16 py-4 -mt-4"
          @mouseenter="isMetaShown = true"
          @mouseleave="isMetaShown = false"
        >
          <div v-if="!isMetaShown" class="uppercase text-sm text-gray-300">
            Meta
          </div>
          <div v-else>
            <p>
              Posted on
              <time datetime="2012-04-10"
                ><a href="">Tuesday, April 10th</a></time
              >
              at <a href="">10:11 PM</a>.
            </p>
            <ul class="flex">
              <li>
                <a href="">#korean grammar</a>
              </li>
            </ul>
          </div>
        </footer>
        <nav>
          <a href="" rel="prev">« previous</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="" rel="next">next »</a>
        </nav>
      </article>
    </div>
  </div>
</template>

<style scoped>
aside nav ul li {
  width: 180px;
  @apply hover:text-black;
}
article > * {
  width: 600px;
}

article h1 {
  @apply text-4xl mb-7 font-mono;
}

article h2 {
  @apply font-bold mb-4;
}

article p {
  @apply mb-4;
}

article ul {
  @apply mb-4 pl-6;
}

article ul li {
  @apply list-disc list-inside;
}

article nav {
  @apply mb-10 text-gray-400;
}

article nav a,
article footer p a {
  @apply text-blue-900 hover:underline underline-offset-2;
}

article footer {
  @apply text-sm font-mono tracking-tight;
}

article footer p {
  @apply mb-0 text-gray-600;
}

article footer ul {
  @apply pl-0 mb-0;
}

article footer ul li {
  @apply list-none text-gray-300 hover:text-blue-800;
}
</style>
