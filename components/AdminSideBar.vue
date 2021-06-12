<template>
  <aside
    class="sidebar w-56 drop-shadow-lg transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-rhb-blue-500"
  >
    <div class="sidebar-header flex items-center justify-center py-4">
      <div class="inline-flex">
        <NuxtLink to="/" class="inline-flex flex-col items-center">
            <!-- <div class="flex-shrink-0 flex items-center"> -->
            <img
              class="block h-8 my-2 w-auto"
              src="~/assets/RHB_logo.png"
              alt="RHB Logo"
            />
          <span class="text-center text-white text-sm">Getting Our Hack On</span>
        </NuxtLink>
      </div>
    </div>
    <div class="sidebar-content py-6">
      <ul class="flex flex-col w-full text-lg space-y-3">
        <li class="my-px px-4 text-white hover:bg-white hover:text-rhb-blue-500">
          <NuextLink to="/" class="flex flex-row items-center h-10 px-3 rounded-lg">
            <HomeIcon class="flex items-center justify-center text-lg h-6 w-6"></HomeIcon>
            <span class="ml-3">Home</span>
          </NuextLink>
        </li>
        <li class="my-px px-4 text-white hover:bg-white hover:text-rhb-blue-500">
          <NuxtLink to="/challenges" class="flex flex-row items-center h-10 px-3 rounded-lg">
            <TerminalIcon class="flex items-center justify-center text-lg h-6 w-6"></TerminalIcon>
            <span class="ml-3">Hack</span>
          </NuxtLink>
        </li>
        <li class="my-px px-4 text-white hover:bg-white hover:text-rhb-blue-500">
          <NuxtLink to="/candidate-profile" class="flex flex-row items-center h-10 px-3 rounded-lg">
            <UsersIcon class="flex items-center justify-center text-lg h-6 w-6"></UsersIcon>
            <span class="ml-3">Performance</span>
          </NuxtLink>
        </li>
        <li class="my-px bg-white py-1 px-4">
          <NuxtLink to="hiring-dashboard" class="flex flex-row items-center h-10 px-3 rounded-lg text-rhb-blue-500">
            <ChartSquareBarIcon
              class="flex items-center justify-center text-lg text-rhb-blue-500 h-6 w-6"
            ></ChartSquareBarIcon>
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import {
  UsersIcon,
  HomeIcon,
  TerminalIcon,
  ChartSquareBarIcon,
} from "@vue-hero-icons/outline";

export default {
  components: {
    UsersIcon,
    HomeIcon,
    ChartSquareBarIcon,
    TerminalIcon,
  },
};
</script>
