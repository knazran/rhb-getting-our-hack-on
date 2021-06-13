<template>
  <nav class="mt-8">
    <div class="w-full px-4 mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <h1 class="text-3xl font-semibold tracking-wide uppercase">
              {{ title }}
            </h1>
            <div class="w-24 h-1 mt-3 bg-rhb-blue-500"></div>
          </div>

          <!-- Links section -->
          <div class="hidden lg:block lg:ml-10"></div>
        </div>

        <div
          class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end"
        ></div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md  bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="block w-6 h-6"
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
              class="hidden w-6 h-6"
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
              class="flex-shrink-0 p-1 text-gray-400 rounded-full  hover:text-gray-500 focus:outline-none"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="w-8 h-8"
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
            <div class="relative flex-shrink-0 ml-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm text-white rounded-full  bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-rhb-blue-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-10 h-10 rounded-full"
                    src="~/assets/suba.jpeg"
                    alt="Suba's profile photo."
                  />
                </button>
              </div>

              <!-- src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" -->

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
                    class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >Your Profile</a>

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >Settings</a>

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
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
    <div class="border-b border-gray-200 bg-gray-50 lg:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-100", Default: "hover:bg-gray-100" -->
        <a
          href="#"
          class="block px-3 py-2 font-medium text-gray-900 bg-gray-100 rounded-md "
          aria-current="page"
          >Dashboard</a
        >

        <a
          href="#"
          class="block px-3 py-2 font-medium text-gray-900 rounded-md  hover:bg-gray-100"
          >Jobs</a
        >

        <a
          href="#"
          class="block px-3 py-2 font-medium text-gray-900 rounded-md  hover:bg-gray-100"
          >Applicants</a
        >

        <a
          href="#"
          class="block px-3 py-2 font-medium text-gray-900 rounded-md  hover:bg-gray-100"
          >Company</a
        >
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">
              Whitney Francis
            </div>
            <div class="text-sm font-medium text-gray-500">
              whitneyfrancis@example.com
            </div>
          </div>
          <button
            class="flex-shrink-0 p-1 ml-auto text-gray-400 rounded-full  bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
          >
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg
              class="w-6 h-6"
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
        <div class="px-2 mt-3 space-y-1">
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-100"
            >Your Profile</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-100"
            >Settings</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-100"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
    },
  },
};
</script>
