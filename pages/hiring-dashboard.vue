<template>
  <main class="flex flex-col bg-gray-900 min-h-screen">
    <div class="relative min-h-screen bg-white">
      <!-- Navbar -->
      <nav class="bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative h-16 flex items-center justify-between border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=violet&shade=500"
                  alt="Workflow"
                />
              </div>

              <!-- Links section -->
              <div class="hidden lg:block lg:ml-10">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-100", Default: "hover:text-gray-700" -->
                  <a
                    href="#"
                    class="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900"
                    aria-current="page"
                  >Dashboard</a>

                  <a
                    href="#"
                    class="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900"
                  >Applicants</a>

                  <a
                    href="#"
                    class="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900"
                  >Company</a>
                </div>
              </div>
            </div>

            <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
              <!-- Search section -->
              <div class="max-w-lg w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-gray-400 focus-within:text-gray-500">
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <!-- Heroicon name: solid/search -->
                    <svg
                      class="h-5 w-5"
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
                  <input
                    id="search"
                    class="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:placeholder-gray-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                class="bg-gray-50 p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <!--
              Heroicon name: outline/menu
              Menu open: "hidden", Menu closed: "block"
                -->
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <!--
              Heroicon name: outline/x
              Menu open: "block", Menu closed: "hidden"
                -->
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Actions section -->
            <div class="hidden lg:block lg:ml-4">
              <div class="flex items-center">
                <button
                  class="bg-gray-50 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                >
                  <span class="sr-only">View notifications</span>
                  <!-- Heroicon name: outline/bell -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="ml-3 relative flex-shrink-0">
                  <div>
                    <button
                      type="button"
                      class="bg-gray-50 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="rounded-full h-8 w-8"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt
                      />
                    </button>
                  </div>

                  <!--
                Dropdown menu, show/hide based on menu state.
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
                  -->
                  <!-- <div
                    class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >Your Profile</a>

                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >Settings</a>

                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >Sign out</a>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="bg-gray-50 border-b border-gray-200 lg:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-100", Default: "hover:bg-gray-100" -->
            <a
              href="#"
              class="bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900"
              aria-current="page"
            >Dashboard</a>

            <a
              href="#"
              class="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900"
            >Jobs</a>

            <a
              href="#"
              class="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900"
            >Applicants</a>

            <a
              href="#"
              class="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900"
            >Company</a>
          </div>
          <div class="pt-4 pb-3 border-t border-gray-200">
            <div class="px-5 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="rounded-full h-10 w-10"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">Whitney Francis</div>
                <div class="text-sm font-medium text-gray-500">whitneyfrancis@example.com</div>
              </div>
              <button
                class="ml-auto bg-gray-50 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
              >
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 px-2 space-y-1">
              <a
                href="#"
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Your Profile</a>

              <a
                href="#"
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Settings</a>

              <a
                href="#"
                class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Sign out</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page heading -->

      <main class="pt-8 pb-16">
        <!-- Stats -->
        <div class='mb-8 px-8'>
          <h3 class="text-2xl leading-6 font-bold text-gray-900">Challenge Overview</h3>

          <dl class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div
              class="relative bg-white pt-4 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div class="absolute bg-indigo-500 rounded-md p-3">
                  <!-- Heroicon name: outline/users -->
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-sm font-medium text-gray-500 truncate">Total Candidate</p>
              </dt>
              <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p class="text-2xl font-semibold text-gray-900">1,698</p>
                <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  <!-- Heroicon name: solid/arrow-sm-up -->
                  <svg
                    class="self-center flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Increased by</span>
                  122
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <!-- Candidate Table List -->
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="px-4 sm:px-0">
            <h2 class="text-lg font-medium text-gray-900">Candidates</h2>

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
                class="border-purple-500 text-purple-600  border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
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
export default {};
</script>

<style scoped></style>
