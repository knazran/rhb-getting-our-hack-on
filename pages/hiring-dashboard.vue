<template>
  <main class="flex flex-row min-h-screen">
    <AdminSideBar/>

    <div class="relative w-full min-h-screen bg-rhb-blue-50">
      
      <!-- Header -->
      <AdminNavBar/>

      <!-- Page heading -->

      <main class="mt-4 pb-16 px-8">

        <!-- Stats Card-->
        <div class="mb-8">
          <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div class="relative bg-white py-4 px-4 shadow rounded-lg overflow-hidden">
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
            <div class="relative bg-white py-4 px-4 shadow rounded-lg overflow-hidden">
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
            <div class="relative bg-white py-4 px-4 shadow rounded-lg overflow-hidden">
              <dt>
                <div class="absolute bg-rhb-blue-800 rounded-md p-3">
                  <StarIcon class="text-white" size="28"></StarIcon>
                </div>
                <p
                  class="ml-16 text-sm font-bold uppercase text-black truncate tracking-tight"
                >Something Else</p>
              </dt>
              <dd class="ml-16 flex items-baseline">
                <p class="text-xl text-gray-800 tracking-wider">30</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <ArrowUpIcon class="h-5 w-5 self-center flex-shrink-0 text-green-600"></ArrowUpIcon>
                  <span class="sr-only">Increased by</span>
                  2.1%
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Charts -->
        <div class='grid grid-cols-2 gap-4 mb-8'>
          <div class='relative rounded-md shadow-md py-4 px-4 h-64 bg-white'>
            <!-- Header -->
            <h4 class="text-xs uppercase text-gray-400">CHALLENGE SOLVED CATEGORISE BY SKILL</h4>
            <h3 class="text-md uppercase font-semibold text-gray-900">Top Skill Set</h3>
            <div class='absolute inset-y-1 right-0 p-2'>
              <!-- Heroicon name: solid/chevron-right -->
              <DotsVerticalIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-700"></DotsVerticalIcon>
            </div>
          </div>
          <div class='relative rounded-md shadow-md py-4 px-4 h-64 bg-white'>
            <!-- Header -->
            <h4 class="text-xs uppercase text-gray-400">CHALLENGE SOLVED Over Time</h4>
            <h3 class="text-md uppercase font-semibold text-gray-900">Challenge Trend</h3>
            <div class='absolute inset-y-1 right-0 p-2'>
              <!-- Heroicon name: solid/chevron-right -->
              <DotsVerticalIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-700"></DotsVerticalIcon>
            </div>
          </div>
        </div>

        <!-- Candidate Table List -->
        <div class="max-w-7xl mx-auto">
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
                  <div class="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center">
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
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <select
                id="tabs"
                name="tabs"
                class="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
              >
                <option>Applied</option>

                <option>Phone Screening</option>

                <option selected>Interview</option>

                <option>Offer</option>

                <option>Disqualified</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-200">
                <nav class="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                  <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
                  <a
                    href="#"
                    class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Applied
                    <!-- Current: "bg-purple-100 text-purple-600", Default: "bg-gray-100 text-gray-900" -->
                    <span
                      class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    >2</span>
                  </a>

                  <a
                    href="#"
                    class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Phone Screening
                    <span
                      class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    >4</span>
                  </a>

                  <a
                    href="#"
                    class="border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Interview
                    <span
                      class="bg-purple-100 text-purple-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    >6</span>
                  </a>

                  <a
                    href="#"
                    class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >Offer</a>

                  <a
                    href="#"
                    class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >Disqualified</a>
                </nav>
              </div>
            </div>
          </div>

          <!-- Stacked list -->
          <ul
            class="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0"
            role="list"
          >
            <li>
              <a href="#" class="group block">
                <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div class="min-w-0 flex-1 flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-12 w-12 rounded-full group-hover:opacity-75"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt
                      />
                    </div>
                    <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p class="text-sm font-medium text-purple-600 truncate">Emily Selman</p>
                        <p class="mt-2 flex items-center text-sm text-gray-500">
                          <!-- Heroicon name: solid/mail -->
                          <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                            />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span class="truncate">emilyselman@example.com</span>
                        </p>
                      </div>
                      <div class="hidden md:block">
                        <div>
                          <p class="text-sm text-gray-900">
                            Applied on
                            <time datetime="2020-07-01T15:34:56">January 7, 2020</time>
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            <!-- Heroicon name: solid/check-circle -->
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Completed phone screening
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg
                      class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>

            <!-- More candidates... -->
          </ul>

          <!-- Pagination -->
          <nav
            class="border-t border-gray-200 px-4 flex items-center justify-center sm:px-0"
            aria-label="Pagination"
          >
            <div class="hidden md:-mt-px md:flex">
              <a
                href="#"
                class="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >1</a>
              <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
              <a
                href="#"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
              >2</a>
              <a
                href="#"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >3</a>
              <a
                href="#"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >4</a>
              <a
                href="#"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >5</a>
              <a
                href="#"
                class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >6</a>
            </div>
          </nav>
        </div>
      </main>
    </div>
  </main>
</template>

<script>
import { UsersIcon, StarIcon, DotsVerticalIcon } from "@vue-hero-icons/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@vue-hero-icons/solid";

export default {
  components: {
    DotsVerticalIcon,
    UsersIcon,
    StarIcon,
    ArrowDownIcon,
    ArrowUpIcon,
  },
};
</script>

<style scoped></style>
