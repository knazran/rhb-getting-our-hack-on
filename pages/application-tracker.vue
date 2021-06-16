<template>
  <main class="px-8 pb-16 mt-4">
    <AdminNavBar class="-ml-8" title="Candidate Lifecycle" />

    <!-- Candidate lifecycle -->
    <div class="grid grid-cols-3 gap-8 mt-4 mb-8">
      <!-- Infocard -->
      <div
        class="relative col-span-1 px-4 py-4 bg-white rounded-20"
        style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
      >
        <!-- Header -->
        <h4 class="pl-4 text-base text-gray-400 uppercase">
          Average turnaround time
        </h4>
        <h3 class="pl-4 text-xl font-semibold text-gray-900 uppercase">
          Time to hire
        </h3>
        <div class="absolute right-0 p-2 inset-y-1">
          <!-- Heroicon name: solid/chevron-right -->
          <button @click="isChartLeftSettings = true">
            <DotsVerticalIcon
              class="w-10 h-10 text-gray-400 group-hover:text-gray-700"
            ></DotsVerticalIcon>
          </button>
        </div>

        <div
          v-if="isChartLeftSettings"
          v-on-clickaway="
            () => {
              isChartLeftSettings = false;
            }
          "
          class="absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg  right-7 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="project-options-menu-0-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a
              href="#"
              class="flex items-center px-4 py-2 text-sm text-gray-700  group hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
              id="project-options-menu-0-item-0"
            >
              <svg
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                />
              </svg>
              Download as image
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-2 text-sm text-gray-700  group hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
              id="project-options-menu-0-item-1"
            >
              <svg
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              Export data
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-2 text-sm text-gray-700  group hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
              id="project-options-menu-0-item-2"
            >
              <svg
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                />
              </svg>
              Share
            </a>
          </div>
        </div>

        <!-- info -->
        <div class="flex flex-col items-center w-full h-full justify-evenly">
          <div class="flex flex-row items-center justify-center ml-20">
            <div class="flex flex-col items-center justify-center">
              <p class="text-8xl">45</p>
              <p class="text-xl font-bold">DAYS</p>
            </div>
            <div>
              <p
                class="flex items-baseline ml-2 text-4xl font-semibold text-red-600 "
              >
                <ArrowUpIcon
                  class="self-center flex-shrink-0 w-10 h-10 text-red-600"
                ></ArrowUpIcon>
                <span class="sr-only">Increased by</span>
                2%
              </p>
            </div>
          </div>
          <div>
            <p class="text-2xl text-gray-500">From Application to Onboarded</p>
          </div>
        </div>
      </div>

      <!-- Chart -->
      <div
        class="relative col-span-2 px-4 py-4 bg-white rounded-20"
        style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
      >
        <!-- Header -->
        <h4 class="pl-4 text-base text-gray-400 uppercase">
          Overall application to onboarding conversation with stage average
          turnaround time
        </h4>
        <h3 class="pl-4 text-xl font-semibold text-gray-900 uppercase">
          Hiring funnel with turnaround time
        </h3>
        <div class="absolute right-0 p-2 inset-y-1">
          <!-- Heroicon name: solid/chevron-right -->
          <button @click="isChartLeftSettings = true">
            <DotsVerticalIcon
              class="w-10 h-10 text-gray-400 group-hover:text-gray-700"
            ></DotsVerticalIcon>
          </button>
        </div>

        <div
          v-if="isChartLeftSettings"
          v-on-clickaway="
            () => {
              isChartLeftSettings = false;
            }
          "
          class="absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg  right-7 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="project-options-menu-0-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a
              href="#"
              class="flex items-center px-4 py-2 text-sm text-gray-700  group hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
              id="project-options-menu-0-item-0"
            >
              <svg
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                />
              </svg>
              Download as image
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-2 text-sm text-gray-700  group hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
              id="project-options-menu-0-item-1"
            >
              <svg
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              Export data
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-2 text-sm text-gray-700  group hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
              id="project-options-menu-0-item-2"
            >
              <svg
                class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                />
              </svg>
              Share
            </a>
          </div>
        </div>

        <!-- Chart -->
        <HiringFunnelBarChart v-on:skill-bar-click="onSkillClick($event)" />
      </div>
    </div>

    <!-- Candidate -->
    <div class="w-full mx-auto mt-8">
      <div class="px-4 mt-4 sm:px-0">
        <div class="relative">
          <h1 class="text-3xl font-semibold tracking-wide uppercase">
            Candidate
          </h1>
          <div class="w-24 h-1 mt-3 bg-rhb-blue-500"></div>

          <div class="absolute inset-y-0 right-0 w-full max-w-lg lg:w-1/4">
            <label for="search" class="sr-only">Search</label>
            <div class="relative text-gray-400 focus-within:text-gray-500">
              <input
                id="search"
                class="block w-full py-4 pl-4 text-base leading-5 text-gray-600 placeholder-gray-500 border rounded-full  border-rhb-blue-300 bg-rhb-blue-300 focus:outline-none focus:ring-1 focus:ring-rhb-blue-700 focus:border-rhb-blue-700 focus:placeholder-gray-500"
                placeholder="Search application"
                autocomplete="off"
                type="search"
                name="search"
              />
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none "
              >
                <svg
                  class="w-5 h-5 text-rhb-blue-600"
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
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <div
              class="overflow-hidden border-b border-gray-200 shadow  sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-900 "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Assign to
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      TAT (in days)
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Notes
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Target Date
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="application in applicationList"
                    :key="application.key"
                    class="relative"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-10 h-10 rounded-full"
                            :src="application.image"
                            alt
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-rhb-blue-700">
                            {{ application.name }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ application.email }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ application.status }}
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ application.assign_to }}
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ application.tat }}
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-center text-gray-500  whitespace-nowrap"
                    >
                      {{ application.notes }}
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-center text-gray-500  whitespace-nowrap"
                    >
                      {{ application.target_date }}
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
</template>

<script>
import { DotsVerticalIcon, ChevronRightIcon } from "@vue-hero-icons/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@vue-hero-icons/solid";
import { directive as onClickaway } from "vue-clickaway2";

import applications from "~/data/applications.json";

export default {
  name: "ApplicationTrackerPage",
  components: {
    DotsVerticalIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    ChevronRightIcon,
  },
  layout: "admin",
  data() {
    return {
      showFbSharing: false,
      clickedSkill: "",
      isChartRightSettings: false,
      isChartLeftSettings: false,
    };
  },
  computed: {
    applicationList() {
      return applications;
    },
  },
  methods: {
    onSkillClick(value) {
      console.log(value);

      if (value.name === "Go") {
        this.showFbSharing = true;
      }

      this.clickedSkill = value.name;
    },
    toggleFbSharing() {
      this.showFbSharing = !this.showFbSharing;
    },
    loadImage(url) {
      return this.require(url);
    },
  },
  directives: {
    onClickaway: onClickaway,
  },
};
</script>

<style scoped></style>
