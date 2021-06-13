<template>
  <main class="flex flex-col min-h-screen">
    <AdminNavBar title="Candidate Profile"/>
    <div class="container p-10 mx-auto">

      <div class="flex items-stretch my-6 text-white">
        <!-- View One -->
        <div class="w-3/12 px-4 rounded-20 2xl:px-8 " >
          <ProfileCard style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)" mode='light'/>
        </div>

        <!-- View Two -->
        <div class="w-9/12 px-4 rounded-20 bg-white" style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
        >
          <SkillReportCard mode='light'/>
        </div>
      </div>
    </div>
    <!-- light mode candidate assessment -->
    <section class="p-10">
      <div class="flex-shrink-0 mb-6">
        <h1 class="text-3xl font-semibold tracking-wide">
          CANDIDATE ASSESSMENT
        </h1>
        <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
      </div>

      <div
        class="grid w-full grid-cols-3 gap-4 px-5 py-8 bg-white rounded-20"
        style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
      >
        <div class="flex justify-around col-span-1">
          <div class="flex flex-col justify-between">
            <div>
              <p class="text-base font-light text-gray-500">
                Tien did better than
              </p>
              <p class="text-base font-bold text-gray-700">24% of your peers</p>
            </div>

            <div>
              <p class="mb-4 text-base font-bold text-gray-700">
                Looking for someone else?
              </p>
              <NuxtLink
                to="/hiring-dashboard"
                class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
              >
                MORE CANDIDATES
              </NuxtLink>
            </div>

            <div class="mb-12">
              <div class="w-full h-1 my-1 bg-rhb-blue-500"></div>
              <p class="text-base font-light text-gray-500">
                <span class="underline">Review</span> Tien's solutions
              </p>
            </div>
          </div>
          <div class="w-1 h-full bg-rhb-blue-500"></div>
        </div>

        <div class="flex flex-col w-full col-span-2">
          <div class="flex items-start justify-between">
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
            <span class="px-4 py-2 text-white bg-green-400 rounded-full"
              >OPEN FOR HIRE</span
            >
          </div>

          <div class="grid w-full grid-cols-2 gap-8 mb-16">
            <div>
              <div class="w-4/5 h-1 my-1 bg-green-500"></div>
              <h3
                class="mb-4 text-2xl font-bold text-tgray-800 tracking-relaxed"
              >
                Tien's strengths
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
                class="mb-4 text-2xl font-bold text-tgray-800 tracking-relaxed"
              >
                Tien's gaps
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
    </section>

    <!-- light mode best roles -->
    <section class="p-10">
      <div class="flex-shrink-0 mb-6">
        <h1 class="text-3xl font-semibold tracking-wide">BEST ROLES</h1>
        <div class="w-24 h-1 my-1 bg-rhb-blue-500"></div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="role in roles"
          :key="role.key"
          class="p-5 bg-white border-2 rounded-20"
        >
          <div class="flex">
            <div class="w-4/5">
              <h2
                class="mt-6 text-2xl font-bold text-tgray-800 tracking-relaxed"
              >
                {{ role.title }}
              </h2>
              <p class="mb-8 text-sm font-light text-gray-500">
                {{ role.description }}
              </p>
            </div>
            <div class="w-1/5">
              <p class="text-sm text-right text-tgray-500">{{ role.date }}</p>
            </div>
          </div>

          <div class="flex mb-4 space-x-2">
            <span
              v-for="label in role.labels"
              :class="label === 'hotjob' ? 'bg-red-500' : 'bg-blue-500'"
              class="px-8 py-1.5 text-white rounded-full"
              >{{ label }}</span
            >
          </div>

          <NuxtLink
            to="/"
            class="inline-flex px-20 py-3 text-sm font-bold text-gray-100 shadow-md  bg-rhb-blue-600 rounded-2xl hover:bg-rhb-blue-900"
          >
            SEND TO TIEN
          </NuxtLink>
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

import roles from "~/data/roles.json";

export default {
  components: { SkillReportCard, IconifyIcon },
  layout: "admin",
  data() {
    return {
      roles,
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
