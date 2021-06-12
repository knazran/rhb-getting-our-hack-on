<template>
  <main class="flex flex-row min-h-screen">
    <AdminSideBar />

    <div class="relative w-full min-h-screen bg-rhb-blue-50">
      <!-- Header -->
      <AdminNavBar />

      <!-- Page heading -->

      <main class="mt-4 pb-16 px-8">
        <!-- Stats Card-->
        <div class="mb-8">
          <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              class="relative bg-white py-4 px-4 rounded-20 overflow-hidden"
              style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
            >
              <dt>
                <div class="absolute bg-rhb-blue-800 rounded-md p-3">
                  <UsersIcon class="text-white" size="28"></UsersIcon>
                </div>
                <p
                  class="ml-16 text-sm font-bold uppercase text-black truncate tracking-tight"
                >Total Talent</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-xl text-gray-800 tracking-wider">1,361</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpIcon class="h-5 w-5 self-center flex-shrink-0 text-green-600"></ArrowUpIcon>
                  <span class="sr-only">Increased by</span>
                  10.02%
                </p>
              </dd>
            </div>
            <div
              class="relative bg-white py-4 px-4 rounded-20 overflow-hidden"
              style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
            >
              <dt>
                <div class="absolute bg-rhb-blue-800 rounded-md p-3">
                  <StarIcon class="text-white" size="28"></StarIcon>
                </div>
                <p
                  class="ml-16 text-sm font-bold uppercase text-black truncate tracking-tight"
                >Hot Talent</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-xl text-gray-800 tracking-wider">80</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                  <!-- Heroicon name: solid/arrow-sm-up -->
                  <ArrowDownIcon class="h-5 w-5 self-center flex-shrink-0 text-red-600"></ArrowDownIcon>
                  <span class="sr-only">Decreased by</span>
                  0.01%
                </p>
              </dd>
            </div>
            <div
              class="relative bg-white py-4 px-4 rounded-20 overflow-hidden"
              style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
            >
              <dt>
                <div class="absolute bg-rhb-blue-800 rounded-md p-3">
                  <StarIcon class="text-white" size="28"></StarIcon>
                </div>
                <p
                  class="ml-16 text-sm font-bold uppercase text-black truncate tracking-tight"
                >Application Rate</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-xl text-gray-800 tracking-wider">5.7%</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpIcon class="h-5 w-5 self-center flex-shrink-0 text-green-600"></ArrowUpIcon>
                  <span class="sr-only">Increased by</span>
                  0.8%
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Charts -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <div
            class="relative rounded-20 py-4 px-4 bg-white"
            style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
          >
            <!-- Header -->
            <h4 class="text-xs uppercase text-gray-400">CHALLENGE SOLVED CATEGORISE BY SKILL</h4>
            <h3 class="text-md uppercase font-semibold text-gray-900">Top Skill Set</h3>
            <div class="absolute inset-y-1 right-0 p-2">
              <!-- Heroicon name: solid/chevron-right -->
              <DotsVerticalIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-700"></DotsVerticalIcon>
            </div>
            <!-- Chart -->
            <SkillSetBarChart v-on:skill-bar-click="showFBSharing($event)" />
          </div>
          <div
            class="relative rounded-20 py-4 px-4 bg-white"
            style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
          >
            <!-- Header -->
            <h4 class="text-xs uppercase text-gray-400">CHALLENGE SOLVED Over Time</h4>
            <div class="flex">
              <h3 class="text-md uppercase font-semibold text-gray-900">Challenge Trend</h3>
              <span class="ml-2 flex items-baseline text-sm font-semibold text-green-500">
                <ArrowUpIcon class="h-4 w-4 self-center flex-shrink-0 text-green-500 font-light"></ArrowUpIcon>
                <p class="py-1">3.8%</p>
              </span>
            </div>

            <div class="absolute inset-y-1 right-0 p-2">
              <!-- Heroicon name: solid/chevron-right -->
              <DotsVerticalIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-700"></DotsVerticalIcon>
            </div>

            <!-- Chart -->
            <ChallengeLineChart />
          </div>
        </div>

        <div
          v-if="showFbSharing"
          class="bg-white p-4 rounded-20 mb-4 w-1/2 border border-rhb-blue-500 border-opacity-60"
          style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
        >
          <h4 class="text-xs font-bold uppercase text-rhb-blue-800">Boost a Challenge</h4>
          <h3 class="text-md uppercase font-semibold text-gray-900">Go</h3>
          <div class="mb-4">
            <div>
              <h4 class="text-xs text-gray-600 mt-4">Targeted Group</h4>
              <h3 class="text-sm font-semibold text-gray-900">KL Golang User Group</h3>
            </div>

            <div class="mb-4">
              <h4 class="text-xs text-gray-600 mt-4">Caption</h4>
              <h3
                class="text-sm font-semibold text-gray-900"
              >Are you up for the challenge? Get Your Hack On for Go programming language and flex your skills. Our recruiters might take note of your coding skills and contact you.</h3>
            </div>
          </div>

          <div class="flex justify-end w-full mb-2 mt-12">
            <ShareNetwork
              class="bg-fb-blue text-white py-2 px-12 rounded text-sm"
              network="facebook"
              url="https://rhbgroup.is-hiring.com/jobcampaign/view/1002418"
              title="Get Your Hack On! Challenges on Go are open!"
              description="Are you up for the challenge? Get Your Hack On for Go programming language and flex your skills. Our recruiters might take note of your coding skills and contact you."
              quote="Are you up for the challenge? Get Your Hack On for Go programming language and flex your skills. Our recruiters might take note of your coding skills and contact you."
              hashtags="rhb,job,career,go,coding"
            >Share on Facebook
            </ShareNetwork>

            <button @click="toggleFbSharing" class="text-gray-500 py-2 px-12 text-sm">Dismiss</button>
          </div>
        </div>

        <!-- Candidate Table List -->
        <div class="w-full mx-auto">
          <div class="px-4 sm:px-0">
            <div class="relative">
              <h1 class="text-2xl font-semibold uppercase tracking-wide">Talent</h1>
              <div class="my-1 h-1 w-24 bg-rhb-blue-500"></div>

              <div class="absolute right-0 inset-y-0 max-w-lg w-full lg:w-1/4">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-gray-400 focus-within:text-gray-500">
                  <input
                    id="search"
                    class="block w-full bg-rhb-blue-300 py-2 pl-4 rounded-full leading-5 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-rhb-blue-700 focus:border-rhb-blue-700 focus:placeholder-gray-500 sm:text-xs"
                    placeholder="Search Talents"
                    autocomplete="off"
                    type="search"
                    name="search"
                  />
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg
                      class="h-5 w-5 text-rhb-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tabs -->
          </div>

          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col mt-4">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class>
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-sm font-bold text-gray-900 tracking-wider"
                        >Name</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-sm font-bold text-gray-900 tracking-wider"
                        >Challenge Completed</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-sm font-bold text-gray-900 tracking-wider"
                        >Skillset</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-sm font-bold text-gray-900 tracking-wider"
                        >Open For Hire</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-sm font-bold text-gray-900 tracking-wider"
                        >Score</th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-sm font-bold text-gray-900 tracking-wider"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="candidate in candidateList" :key="candidate.email">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" :src="candidate.image" alt />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-rhb-blue-700">{{candidate.name}}</div>
                              <div class="text-sm text-gray-500">{{candidate.email}}</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          <div class="text-sm text-gray-900">{{candidate.completed_challeges}}</div>
                          <!-- <div class="text-sm text-gray-500">Optimization</div> -->
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                        >{{candidate.skillset}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                          >{{candidate.hiring}}</span>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                        >{{candidate.score}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                          <button
                            class="py-2 px-4 bg-rhb-blue-700 hover:bg-rhb-blue-800 text-white rounded-lg"
                          >Share JD</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <AdminPagination />
        </div>
      </main>
    </div>
  </main>
</template>

<script>
import { UsersIcon, StarIcon, DotsVerticalIcon } from "@vue-hero-icons/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@vue-hero-icons/solid";

import candidateConfigList from "~/data/candidates.json";

export default {
  components: {
    DotsVerticalIcon,
    UsersIcon,
    StarIcon,
    ArrowDownIcon,
    ArrowUpIcon,
  },
  data() {
    return {
      showFbSharing: false,
    };
  },
  computed: {
    candidateList() {
      return candidateConfigList["candidates"];
    },
  },
  methods: {
    showFBSharing(value) {
      console.log(value);
      this.showFbSharing = true;
    },
    toggleFbSharing() {
      this.showFbSharing = !this.showFbSharing;
    }
  },
};
</script>

<style scoped></style>
