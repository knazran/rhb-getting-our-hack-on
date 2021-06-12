<template>
  <aside
    class="sidebar w-56 drop-shadow-lg transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-rhb-blue-500"
  >
    <div class="sidebar-header flex items-center justify-center py-4">
      <div class="inline-flex">
        <a href="#" class="inline-flex flex-row items-center">
          <span class="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">RHB</span>
        </a>
      </div>
    </div>
    <div class="sidebar-content py-6">
      <ul class="flex flex-col w-full text-xl space-y-3">
        <li class="my-px px-4 text-white hover:bg-white hover:text-rhb-blue-500">
          <a href="#" class="flex flex-row items-center h-10 px-3 rounded-lg">
            <HomeIcon class="flex items-center justify-center text-lg h-6 w-6"></HomeIcon>
            <span class="ml-3">Home</span>
          </a>
        </li>
        <li class="my-px px-4 text-white hover:bg-white hover:text-rhb-blue-500">
          <a href="#" class="flex flex-row items-center h-10 px-3 rounded-lg">
            <TerminalIcon class="flex items-center justify-center text-lg h-6 w-6"></TerminalIcon>
            <span class="ml-3">Hack</span>
          </a>
        </li>
        <li class="my-px px-4 text-white hover:bg-white hover:text-rhb-blue-500">
          <a href="#" class="flex flex-row items-center h-10 px-3 rounded-lg">
            <UsersIcon class="flex items-center justify-center text-lg h-6 w-6"></UsersIcon>
            <span class="ml-3">Performance</span>
          </a>
        </li>
        <li class="my-px bg-white py-1 px-4">
          <a href="#" class="flex flex-row items-center h-10 px-3 rounded-lg text-rhb-blue-500">
            <ChartSquareBarIcon
              class="flex items-center justify-center text-lg text-rhb-blue-500 h-6 w-6"
            ></ChartSquareBarIcon>
            <span class="ml-3">Dashboard</span>
          </a>
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
