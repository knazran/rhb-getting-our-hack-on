<template>
  <main class="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
    <!-- Header -->
    <div
      class="flex flex-row items-center justify-between px-10 py-4 bg-gray-900"
    >
      <h1 class="text-2xl font-semibold text-white">Open Challenges</h1>

      <div class="flex space-x-4">
        <div>
          <label
            for="difficulty"
            class="block text-sm font-medium text-gray-200"
            >Difficulty</label
          >
          <select
            id="difficulty"
            name="difficulty"
            v-model="difficulty"
            class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div>
          <label for="category" class="block text-sm font-medium text-gray-200"
            >Category</label
          >
          <select
            id="category"
            name="category"
            v-model="category"
            class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option selected>All</option>
            <option v-for="i in categories">{{ i }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Main -->
    <div class="container grid grid-cols-3 gap-6 px-8 py-8 mx-auto">
      <div
        v-for="challenge in challengeList"
        :key="challenge.key"
        class="px-6 py-3 pr-2 shadow-lg rounded-20"
        :class="
          challenge.categories[0].includes('RHB')
            ? 'bg-rhb-blue-500'
            : 'bg-tgray-700'
        "
      >
        <template v-if="challenge.categories[0].includes('RHB')">
          <!-- <p class="flex space-x-1.5 text-xs font-light text-rhb-blue-700"> -->
          <p class="mr-2 text-base font-semibold text-right text-rhb-blue-100">
            {{ challenge.num_question }}
          </p>
          <h3
            class="my-2 text-3xl font-extrabold  text-rhb-blue-800 tracking-relaxed"
          >
            {{ challenge.title }}
          </h3>
          <p class="text-sm font-bold text-gray-100">
            {{ challenge.description }}
          </p>
          <p class="mt-2 space-x-2 text-sm font-light">
            <span
              :class="difficultyStyle(challenge.difficulty)"
              class="font-medium rounded-full py-1 px-1.5"
            >
              {{ challenge.difficulty }}
            </span>
            <span
              v-for="category in challenge.categories"
              class="bg-indigo-50 text-indigo-700 rounded-full py-1 px-1.5"
            >
              {{ category }}
            </span>
          </p>

          <NuxtLink
            :to="`/challenge?title=${challenge.title.replaceAll(
              '#',
              '%23'
            )}&task=${challenge.task.replaceAll(
              '\n',
              '%0D%0A'
            )}&code=${challenge.code.replaceAll(
              '\n',
              '%0D%0A'
            )}&expectedoutput=${challenge.expectedOutput}&description=${
              challenge.description
            }`"
          >
            <button
              class="px-12 py-2 mt-6 mb-4 text-sm font-bold text-gray-100 bg-blue-500 rounded shadow-md  hover:bg-blue-700"
            >
              Challenge yourself!
            </button>
          </NuxtLink>
        </template>
        <template v-else>
          <p class="mr-2 text-xs font-light text-right text-gray-400">
            {{ challenge.num_question }}
          </p>
          <h3 class="my-2 text-2xl font-bold text-gray-200 tracking-relaxed">
            {{ challenge.title }}
          </h3>
          <p class="text-sm font-light text-gray-200">
            {{ challenge.description }}
          </p>
          <p class="mt-2 space-x-2 text-sm font-light">
            <span
              class="rounded-full py-1 px-1.5 font-medium"
              :class="difficultyStyle(challenge.difficulty)"
              >{{ challenge.difficulty }}</span
            >
            <span
              v-for="category in challenge.categories"
              class="
                bg-indigo-50
                font-medium
                text-indigo-700
                rounded-full
                py-1
                px-1.5
              "
              >{{ category }}</span
            >
          </p>

          <NuxtLink
            :to="`/challenge?title=${
              challenge.title
            }&task=${challenge.task.replaceAll(
              '\n',
              '%0D%0A'
            )}&code=${challenge.code.replaceAll(
              '\n',
              '%0D%0A'
            )}&expectedoutput=${challenge.expectedOutput}&description=${
              challenge.description
            }`"
          >
            <button
              class="px-12 py-2 mt-6 mb-4 text-sm font-bold bg-green-600 rounded shadow-md  text-green-50 hover:bg-green-800"
            >
              Take Challenge
            </button>
          </NuxtLink>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import challengesConfigList from "~/data/challenges.js";

export default {
  name: "HomePage",
  data() {
    return {
      difficulty: "All",
      category: "All",
    };
  },
  computed: {
    challengeList() {
      if (this.difficulty === "All" && this.category === "All") {
        return challengesConfigList["challenges"];
      }

      let items = challengesConfigList["challenges"];

      if (this.difficulty !== "All") {
        items = items.filter((item) => item.difficulty === this.difficulty);
      }

      if (this.category !== "All") {
        items = items.filter((item) => item.categories.includes(this.category));
      }

      return items;
    },
    categories() {
      let categories = [];
      challengesConfigList["challenges"].forEach((item) => {
        item.categories.forEach((category) => {
          if (!categories.includes(category)) {
            categories.push(category);
          }
        });
      });

      return categories;
    },
  },
  methods: {
    difficultyStyle(difficulty) {
      if (difficulty === "Easy") {
        return "text-green-700 bg-green-50";
      } else if (difficulty === "Medium") {
        return "text-yellow-700 bg-yellow-50";
      } else if (difficulty === "Hard") {
        return "text-red-700 bg-red-50";
      } else {
        return "text-gray-700 bg-gray-50";
      }
    },
  },
};
</script>

<style scoped></style>
