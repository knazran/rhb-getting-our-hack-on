<template>
  <main class="flex flex-col">
    <!-- Header -->
    <div class="bg-gray-900">
      <div class="container px-8 py-8 mx-auto">
        <h1 class="text-2xl font-semibold text-white">Open Challenges</h1>
      </div>
    </div>

    <!-- Main -->
    <div class="container grid grid-cols-3 gap-6 px-8 py-8 mx-auto">
      <div
        v-for="challenge in challengeList"
        :key="challenge.key"
        class="px-6 py-3 pr-2 bg-white shadow-lg"
      >
        <p class="text-xs font-light text-right text-gray-400">
          {{ challenge.num_question }}
        </p>
        <h3 class="my-2 text-2xl font-bold text-gray-800 tracking-relaxed">
          {{ challenge.title }}
        </h3>
        <p class="text-sm font-light text-gray-500">
          {{ challenge.description }}
        </p>

        <NuxtLink
          :to="`/challenge?title=${challenge.title}&task=${challenge.task}&code=${challenge.code}&expectedoutput=${challenge.expectedOutput}`"
        >
          <button
            class="px-12 py-2 mt-8 mb-4 text-sm font-bold text-green-500 bg-white border border-green-500 rounded shadow-md  hover:bg-green-500 hover:text-white"
          >
            Take Challenge
          </button>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
import challengesConfigList from "~/data/challenges.json";

export default {
  data() {
    return {};
  },

  computed: {
    challengeList() {
      console.log(challengesConfigList);
      return challengesConfigList["challenges"];
    },
  },
};
</script>

<style scoped></style>
