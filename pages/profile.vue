<template>
  <main class="flex flex-col min-h-screen text-white bg-tgray-900">
    <div class="container p-10 mx-auto">
      <!-- Header -->
      <div class="flex-shrink-0">
        <h1 class="text-2xl font-semibold tracking-wide">Profile</h1>
        <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
      </div>

      <div class="flex items-stretch my-6 text-white">
        <!-- View One -->
        <div class="w-3/12 px-4 rounded-md 2xl:px-8">
          <ProfileCard />
        </div>

        <!-- View Two -->
        <div class="w-9/12 px-4 rounded-md">
          <SkillReportCard />
        </div>
      </div>
      <div class="flex justify-end py-2">
        <div class="flex mr-6 space-x-6 align-baseline">
          <p class="mr-4 text-sm text-white">Share your Skill IQ!</p>
          <IconifyIcon :icon="icons.twitter" height="24" />
          <IconifyIcon :icon="icons.linkedin" height="24" />
          <IconifyIcon :icon="icons.stackOverflow" height="22" />
        </div>
      </div>
    </div>

    <section class="container px-10 py-4 mx-auto">
      <div class="flex-shrink-0 mb-6">
        <h1 class="text-2xl font-semibold tracking-wide text-rhb-blue-300">
          Challenge Details
        </h1>
        <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
      </div>

      <div class="flex space-x-2">
        <div
          class="grid w-full grid-cols-3 gap-4 p-5 py-8 border-2 shadow-2xl  border-tgray-800 bg-tgray-700 rounded-2xl hover:border-2 hover:border-rhb-blue-500"
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
                  >MORE CHALLENGE</NuxtLink
                >
              </div>

              <div class="mb-12">
                <div class="w-full h-1 my-1 bg-rhb-blue-500"></div>
                <NuxtLink
                  to="/hiring-dashboard"
                  class="text-base font-light text-gray-400"
                >
                  <span class="underline">Review</span> your solutions
                </NuxtLink>
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

            <div class="grid w-full grid-cols-2 gap-8 mb-16">
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
    <section class="container p-10 mx-auto">
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

      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="job in jobs"
          :key="job.key"
          class="p-4 border-2 shadow-2xl  bg-tgray-700 rounded-20 border-tgray-800 hover:border-2 hover:border-rhb-blue-500"
        >
          <div class="flex">
            <div class="w-4/5">
              <h2
                class="mt-6 text-2xl font-bold text-tgray-200 tracking-relaxed"
              >
                {{ job.title }}
              </h2>
              <p class="mb-8 text-sm font-light text-gray-400">
                {{ job.description }}
              </p>
            </div>
            <div class="w-1/5">
              <p class="text-sm text-right text-tgray-400">{{ job.date }}</p>
            </div>
          </div>

          <NuxtLink
            to="/hiring-dashboard"
            class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
            >APPLY</NuxtLink
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SkillReportCard from "~/components/SkillReportCard.vue";
import IconifyIcon from "@iconify/vue";
import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import stackoverflowIcon from "@iconify-icons/cib/stackoverflow";

import jobs from "~/data/jobs.json";

export default {
  components: { SkillReportCard, IconifyIcon },
  data() {
    return {
      jobs,
      isEnabled: false,
      icons: {
        twitter: twitterOutlined,
        linkedin: linkedinFilled,
        stackOverflow: stackoverflowIcon,
      },
    };
  },
};
</script>

<style scoped></style>
