<template>
  <main class="flex flex-col px-4 pb-20">
    <!-- dark mode challenge details -->
    <section class="p-10">
      <div class="flex-shrink-0 mb-6">
        <h1 class="text-2xl font-semibold tracking-wide text-rhb-blue-300">
          Challenge Details
        </h1>
        <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
      </div>

      <div class="flex space-x-2">
        <div
          class="grid w-full grid-cols-3 gap-4 p-5 border-2 shadow-2xl  border-tgray-800 bg-tgray-900 rounded-2xl hover:border-2 hover:border-rhb-blue-500"
        >
          <div class="flex justify-around col-span-1">
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-base font-light text-gray-400">
                  Good job! You did better than
                </p>
                <p class="text-base font-bold text-gray-200">
                  24% of your peers
                </p>
              </div>

              <div>
                <p class="mb-4 text-base font-bold text-gray-200">
                  Keep going:
                </p>
                <NuxtLink
                  to="/"
                  class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
                >
                  MORE CHALLENGE
                </NuxtLink>
              </div>

              <div>
                <div class="w-full h-1 my-1 bg-rhb-blue-500"></div>
                <p class="text-base font-light text-gray-400">
                  <span class="underline">Review</span> your solutions
                </p>
              </div>
            </div>
            <div class="w-1 h-full bg-rhb-blue-500"></div>
          </div>

          <div class="flex flex-col w-full col-span-2">
            <div>
              <h2
                class="flex items-center space-x-2 text-3xl font-bold  text-tgray-200 tracking-relaxed"
              >
                <span>Personalised Skill Analysis</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              <p class="mb-8 text-base font-light text-gray-400">
                Based on 12 challenges taken
              </p>
            </div>

            <div class="grid w-full grid-cols-2 gap-8">
              <div>
                <div class="w-4/5 h-1 my-1 bg-green-500"></div>
                <h3
                  class="mb-4 text-2xl font-bold  text-tgray-200 tracking-relaxed"
                >
                  Your strengths
                </h3>

                <div class="flex flex-col space-y-2">
                  <p class="text-base text-gray-400">Concurrency</p>
                  <p class="text-base text-gray-400">Web and Network</p>
                  <p class="text-base text-gray-400">Node.js Fundamentals</p>
                </div>
              </div>

              <div>
                <div class="w-4/5 h-1 my-1 bg-red-500"></div>
                <h3
                  class="mb-4 text-2xl font-bold  text-tgray-200 tracking-relaxed"
                >
                  Your gaps
                </h3>

                <div class="flex flex-col space-y-2">
                  <p class="text-base text-gray-400">CLI, REPL and Globals</p>
                  <p class="text-base text-gray-400">Modules and NPM</p>
                  <p class="text-base text-gray-400">Advanced Topics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- dark mode job opening -->
    <section class="p-10">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-semibold tracking-wide text-rhb-blue-300">
            Job Opening
          </h1>
          <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
        </div>
        <div class="flex items-center justify-between space-x-4">
          <span class="flex flex-col flex-grow" id="availability-label">
            <span class="text-base font-medium text-gray-300"
              >Open for employment?</span
            >
          </span>
          <button
            type="button"
            class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer  w-11 focus:outline-none"
            :class="isEnabled ? 'bg-green-600' : 'bg-gray-600'"
            role="switch"
            aria-checked="false"
            aria-labelledby="availability-label"
            @click="isEnabled = !isEnabled"
          >
            <span class="sr-only">Toggle employment offers</span>
            <span
              aria-hidden="true"
              class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-gray-300 rounded-full shadow pointer-events-none  ring-0"
              :class="isEnabled ? 'translate-x-5' : 'translate-x-0'"
            ></span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <div
          v-for="job in jobs"
          :key="job.key"
          class="p-5 border-2 shadow-2xl  bg-tgray-900 rounded-2xl border-tgray-800 hover:border-2 hover:border-rhb-blue-500"
        >
          <p class="text-base text-right text-tgray-400">
            {{ job.date }}
          </p>
          <h2 class="text-3xl font-bold text-tgray-200 tracking-relaxed">
            {{ job.title }}
          </h2>
          <p class="mb-8 text-sm font-light text-gray-400">
            {{ job.description }}
          </p>

          <NuxtLink
            to="/"
            class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
          >
            APPLY
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- light mode challenge details -->
    <section class="p-10 bg-white">
      <div class="flex-shrink-0 mb-6">
        <h1 class="text-2xl font-semibold tracking-wide">Challenge Details</h1>
        <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
      </div>

      <div class="flex space-x-2">
        <div
          class="grid w-full grid-cols-3 gap-4 p-5 bg-white border-2 border-gray-100 shadow-2xl  rounded-2xl hover:border-2 hover:border-rhb-blue-500"
        >
          <div class="flex justify-around col-span-1">
            <div class="flex flex-col justify-between">
              <div>
                <p class="text-base font-light text-gray-500">
                  Good job! You did better than
                </p>
                <p class="text-base font-bold text-gray-700">
                  24% of your peers
                </p>
              </div>

              <div>
                <p class="mb-4 text-base font-bold text-gray-700">
                  Keep going:
                </p>
                <NuxtLink
                  to="/"
                  class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
                >
                  MORE CHALLENGE
                </NuxtLink>
              </div>

              <div>
                <div class="w-full h-1 my-1 bg-rhb-blue-500"></div>
                <p class="text-base font-light text-gray-500">
                  <span class="underline">Review</span> your solutions
                </p>
              </div>
            </div>
            <div class="w-1 h-full bg-rhb-blue-500"></div>
          </div>

          <div class="flex flex-col w-full col-span-2">
            <div>
              <h2
                class="flex items-center space-x-2 text-3xl font-bold  text-tgray-800 tracking-relaxed"
              >
                <span>Personalised Skill Analysis</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              <p class="mb-8 text-base font-light text-gray-500">
                Based on 12 challenges taken
              </p>
            </div>

            <div class="grid w-full grid-cols-2 gap-8">
              <div>
                <div class="w-4/5 h-1 my-1 bg-green-500"></div>
                <h3
                  class="mb-4 text-2xl font-bold  text-tgray-800 tracking-relaxed"
                >
                  Your strengths
                </h3>

                <div class="flex flex-col space-y-2">
                  <p class="text-base text-gray-800">Concurrency</p>
                  <p class="text-base text-gray-800">Web and Network</p>
                  <p class="text-base text-gray-800">Node.js Fundamentals</p>
                </div>
              </div>

              <div>
                <div class="w-4/5 h-1 my-1 bg-red-500"></div>
                <h3
                  class="mb-4 text-2xl font-bold  text-tgray-800 tracking-relaxed"
                >
                  Your gaps
                </h3>

                <div class="flex flex-col space-y-2">
                  <p class="text-base text-gray-800">CLI, REPL and Globals</p>
                  <p class="text-base text-gray-800">Modules and NPM</p>
                  <p class="text-base text-gray-800">Advanced Topics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- light mode job opening -->
    <section class="p-10 bg-white">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-semibold tracking-wide">Job Opening</h1>
          <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
        </div>
        <div class="flex items-center justify-between space-x-4">
          <span class="flex flex-col flex-grow" id="availability-label">
            <span class="text-base font-medium text-gray-900"
              >Open for employment?</span
            >
          </span>
          <button
            type="button"
            class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer  w-11 focus:outline-none"
            :class="isEnabled ? 'bg-green-600' : 'bg-gray-200'"
            role="switch"
            aria-checked="false"
            aria-labelledby="availability-label"
            @click="isEnabled = !isEnabled"
          >
            <span class="sr-only">Toggle employment offers</span>
            <span
              aria-hidden="true"
              class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow pointer-events-none  ring-0"
              :class="isEnabled ? 'translate-x-5' : 'translate-x-0'"
            ></span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <div
          v-for="job in jobs"
          :key="job.key"
          class="p-5 bg-white border-2 border-gray-100 shadow-2xl  rounded-2xl hover:border-2 hover:border-rhb-blue-500"
        >
          <p class="text-base text-right text-tgray-500">
            {{ job.date }}
          </p>
          <h2 class="text-3xl font-bold text-tgray-800 tracking-relaxed">
            {{ job.title }}
          </h2>
          <p class="mb-8 text-sm font-light text-gray-500">
            {{ job.description }}
          </p>

          <NuxtLink
            to="/"
            class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
          >
            APPLY
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import jobs from "~/data/jobs.json";
export default {
  data() {
    return {
      jobs,
      isEnabled: false,
    };
  },
};
</script>

<style scoped></style>
