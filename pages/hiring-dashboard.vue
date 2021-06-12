<template>
  <main class="px-8 pb-16 mt-4">
    <!-- Stats Card-->
    <div class="mb-8">
      <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="relative px-8 py-8 overflow-hidden bg-white rounded-20"
          style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
        >
          <dt>
            <div class="absolute p-3 rounded-md bg-rhb-blue-800">
              <UsersIcon class="text-white" size="48"></UsersIcon>
            </div>
            <p
              class="ml-24 text-lg font-bold tracking-tight text-black uppercase truncate "
            >
              Total Talent
            </p>
          </dt>
          <dd class="flex items-baseline ml-24">
            <p class="text-3xl tracking-wider text-gray-800">1,361</p>
            <p
              class="flex items-baseline ml-2 text-lg font-semibold text-green-600 "
            >
              <ArrowUpIcon
                class="self-center flex-shrink-0 w-5 h-5 text-green-600"
              ></ArrowUpIcon>
              <span class="sr-only">Increased by</span>
              10.02%
            </p>
          </dd>
        </div>
        <div
          class="relative px-8 py-8 overflow-hidden bg-white rounded-20"
          style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
        >
          <dt>
            <div class="absolute p-3 rounded-md bg-rhb-blue-800">
              <StarIcon class="text-white" size="48"></StarIcon>
            </div>
            <p
              class="ml-24 text-lg font-bold tracking-tight text-black uppercase truncate "
            >
              Hot Talent
            </p>
          </dt>
          <dd class="flex items-baseline ml-24">
            <p class="text-3xl tracking-wider text-gray-800">80</p>
            <p
              class="flex items-baseline ml-2 text-lg font-semibold text-red-600 "
            >
              <!-- Heroicon name: solid/arrow-sm-up -->
              <ArrowDownIcon
                class="self-center flex-shrink-0 w-5 h-5 text-red-600"
              ></ArrowDownIcon>
              <span class="sr-only">Decreased by</span>
              0.01%
            </p>
          </dd>
        </div>
        <div
          class="relative px-8 py-8 overflow-hidden bg-white rounded-20"
          style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
        >
          <dt>
            <div class="absolute p-3 rounded-md bg-rhb-blue-800">
              <StarIcon class="text-white" size="48"></StarIcon>
            </div>
            <p
              class="ml-24 text-lg font-bold tracking-tight text-black uppercase truncate "
            >
              Application Rate
            </p>
          </dt>
          <dd class="flex items-baseline ml-24">
            <p class="text-3xl tracking-wider text-gray-800">5.7%</p>
            <p
              class="flex items-baseline ml-2 text-lg font-semibold text-green-600 "
            >
              <ArrowUpIcon
                class="self-center flex-shrink-0 w-5 h-5 text-green-600"
              ></ArrowUpIcon>
              <span class="sr-only">Increased by</span>
              0.8%
            </p>
          </dd>
        </div>
      </dl>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-2 gap-5 mb-8">
      <div
        class="relative px-4 py-4 bg-white rounded-20"
        style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
      >
        <!-- Header -->
        <h4 class="pl-4 text-base text-gray-400 uppercase">
          CHALLENGE SOLVED CATEGORISE BY SKILL
        </h4>
        <h3 class="pl-4 text-xl font-semibold text-gray-900 uppercase">
          Top Skill Set
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
        <SkillSetBarChart v-on:skill-bar-click="onSkillClick($event)" />
      </div>
      <div
        class="relative px-4 py-4 bg-white rounded-20"
        style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
      >
        <!-- Header -->
        <h4 class="pl-4 text-base text-gray-400 uppercase">
          CHALLENGE SOLVED Over Time
        </h4>
        <div class="flex pl-4">
          <h3 class="text-xl font-semibold text-gray-900 uppercase">
            Challenge Trend
          </h3>
          <span
            class="flex items-baseline ml-2 text-lg font-semibold text-green-500 "
          >
            <ArrowUpIcon
              class="self-center flex-shrink-0 w-4 h-4 font-light text-green-500 "
            ></ArrowUpIcon>
            <p class="py-1">3.8%</p>
          </span>
        </div>

        <div class="absolute right-0 p-2 inset-y-1">
          <!-- Heroicon name: solid/chevron-right -->
          <button @click="isChartRightSettings = true">
            <DotsVerticalIcon
              class="w-10 h-10 text-gray-400 group-hover:text-gray-700"
            ></DotsVerticalIcon>
          </button>
        </div>

        <div
          v-if="isChartRightSettings"
          v-on-clickaway="
            () => {
              isChartRightSettings = false;
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
        <ChallengeLineChart />
      </div>
    </div>

    <div
      v-if="showFbSharing"
      class="w-1/2 p-4 mb-4 bg-white border  rounded-20 border-rhb-blue-500 border-opacity-60"
      style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2)"
    >
      <h4 class="text-base font-bold uppercase text-rhb-blue-800">
        Boost a Challenge
      </h4>
      <h3 class="text-xl font-semibold text-gray-900 uppercase">Go</h3>
      <div class="mb-4">
        <div>
          <h4 class="mt-4 text-base text-gray-600">Targeted Group</h4>
          <h3 class="text-lg font-semibold text-gray-900">
            KL Golang User Group
          </h3>
        </div>

        <div class="mb-4">
          <h4 class="mt-4 text-base text-gray-600">Caption</h4>
          <h3 class="text-lg font-semibold text-gray-900">
            Are you up for the challenge? Get Your Hack On for Go programming
            language and flex your skills. Our recruiters might take note of
            your coding skills and contact you.
          </h3>
        </div>
      </div>

      <div class="flex justify-end w-full mt-12 mb-2">
        <ShareNetwork
          class="px-12 py-2 text-lg text-white rounded-md bg-fb-blue"
          network="facebook"
          url="https://rhbgroup.is-hiring.com/jobcampaign/view/1002418"
          title="Get Your Hack On! Challenges on Go are open!"
          description="Are you up for the challenge? Get Your Hack On for Go programming language and flex your skills. Our recruiters might take note of your coding skills and contact you."
          quote="Are you up for the challenge? Get Your Hack On for Go programming language and flex your skills. Our recruiters might take note of your coding skills and contact you."
          hashtags="rhb,job,career,go,coding"
          >Share on Facebook
        </ShareNetwork>

        <button
          @click="toggleFbSharing"
          class="px-12 py-2 text-lg text-gray-500"
        >
          Dismiss
        </button>
      </div>
    </div>

    <!-- Candidate Table List -->
    <div class="w-full mx-auto">
      <div class="px-4 mt-4 sm:px-0">
        <div class="relative">
          <h1 class="text-3xl font-semibold tracking-wide uppercase">Talent</h1>
          <div class="w-24 h-1 mt-3 bg-rhb-blue-500"></div>

          <div class="absolute inset-y-0 right-0 w-full max-w-lg lg:w-1/4">
            <label for="search" class="sr-only">Search</label>
            <div class="relative text-gray-400 focus-within:text-gray-500">
              <input
                id="search"
                class="block w-full py-4 pl-4 text-base leading-5 text-gray-600 placeholder-gray-500 border rounded-full  border-rhb-blue-300 bg-rhb-blue-300 focus:outline-none focus:ring-1 focus:ring-rhb-blue-700 focus:border-rhb-blue-700 focus:placeholder-gray-500"
                placeholder="Search your talent here"
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
                      Challenge Completed
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Skillset
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Open For Hire
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Score
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    ></th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-right text-gray-900 "
                    ></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="candidate in candidateList"
                    :key="candidate.email"
                    class="relative"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-10 h-10 rounded-full"
                            :src="candidate.image"
                            alt
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-rhb-blue-700">
                            {{ candidate.name }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ candidate.email }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ candidate.completed_challeges }}
                      </div>
                      <!-- <div class="text-sm text-gray-500">Optimization</div> -->
                    </td>
                    <td
                      class="flex flex-col items-center px-6 py-4 text-sm text-left text-gray-500  whitespace-nowrap"
                    >
                      <p v-for="skill in candidate.skillset" :key="skill">
                        {{ skill }}
                      </p>
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-center text-gray-500  whitespace-nowrap"
                    >
                      <span
                        class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full "
                        :class="
                          candidate.hiring === 'Yes'
                            ? 'text-green-800 bg-green-100'
                            : 'text-red-800 bg-red-100'
                        "
                        >{{ candidate.hiring }}</span
                      >
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-center text-gray-500  whitespace-nowrap"
                    >
                      {{ candidate.score }}
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-center text-gray-500  whitespace-nowrap"
                    >
                      <a
                        :href="candidate.jd_link"
                        target="_blank"
                        class="px-4 py-2 text-white rounded-lg  bg-rhb-blue-700 hover:bg-rhb-blue-800"
                      >
                        Share JD
                      </a>
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-right text-gray-500  whitespace-nowrap"
                    >
                      <NuxtLink to="/candidate-profile"
                        ><ChevronRightIcon class="inline w-6 h-6 my-1 ml-4"
                      /></NuxtLink>
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

    <!-- Job applications -->
    <div class="w-full mx-auto mt-8">
      <div class="px-4 mt-4 sm:px-0">
        <div class="relative">
          <h1 class="text-3xl font-semibold tracking-wide uppercase">
            Application Tracker
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
                      Recruiter
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
                      Blocker
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-900 "
                    >
                      Start Date
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
                        {{ application.recruiter }}
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
                      {{ application.blocker }}
                    </td>
                    <td
                      class="px-6 py-4 text-sm text-center text-gray-500  whitespace-nowrap"
                    >
                      {{ application.start_date }}
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
import {
  UsersIcon,
  StarIcon,
  DotsVerticalIcon,
  ChevronRightIcon,
} from "@vue-hero-icons/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@vue-hero-icons/solid";
import { directive as onClickaway } from "vue-clickaway2";

import candidateConfigList from "~/data/candidates.json";
import applications from "~/data/applications.json";

export default {
  name: "HiringDashboardPage",
  components: {
    DotsVerticalIcon,
    UsersIcon,
    StarIcon,
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
    candidateList() {
      if (this.clickedSkill !== "") {
        return candidateConfigList["candidates"].filter((candidate) =>
          candidate.skillset.includes(this.clickedSkill)
        );
      }
      return candidateConfigList["candidates"];
    },
    applicationList() {
      return applications;
    },
  },
  methods: {
    onSkillClick(value) {
      console.log(value);
      this.showFbSharing = true;

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
