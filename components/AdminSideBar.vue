<template>
  <aside
    class="
      w-[409px]
      transition-transform
      duration-150
      ease-in
      transform
      -translate-x-full
      sidebar
      drop-shadow-lg
      md:translate-x-0
      bg-rhb-blue-500
    "
  >
    <div class="flex items-center justify-center py-4 sidebar-header">
      <div class="inline-flex">
        <NuxtLink to="/" class="inline-flex flex-col items-center">
          <!-- <div class="flex items-center flex-shrink-0"> -->
          <img
            class="block w-auto h-12 my-2"
            src="~/assets/RHB_logo.png"
            alt="RHB Logo"
          />
          <span class="text-xl text-center text-white"
            >Getting Our Hack On</span
          >
        </NuxtLink>
      </div>
    </div>
    <div class="py-3 sidebar-content">
      <ul class="flex flex-col w-full">
        <!-- <li
          class="px-4 my-px text-white hover:bg-white hover:text-rhb-blue-500"
        >
          <NuxtLink
            to="/"
            class="flex flex-row items-center h-10 px-3 text-3xl rounded-lg"
          >
            <HomeIcon
              class="flex items-center justify-center w-12 h-12 text-3xl"
            ></HomeIcon>
            <span class="ml-4">Home</span>
          </NuxtLink>
        </li> -->
        <NuxtLink
          to="/"
          class="flex flex-row items-center px-8 py-4 text-3xl text-white  hover:bg-white hover:text-rhb-blue-500"
        >
          <HomeIcon class="w-12 h-12"></HomeIcon>
          <span class="ml-4">Home</span>
        </NuxtLink>
        <!-- <li
          class="px-4 my-px text-white hover:bg-white hover:text-rhb-blue-500"
        >
          <NuxtLink
            to="/challenge?title=Print&task=Here%20is%20a%20sample%20line%20of%20code%20that%20can%20be%20executed%20in%20JavaScript%3A%0D%0A%0D%0Aconsole.log%28%22Hello,%20World%21%22%29%0D%0A%0D%0AYou%20can%20just%20as%20easily%20store%20a%20string%20as%20a%20variable%20and%20then%20print%20it%20to%20the%20console%3A%0D%0A%0D%0Alet%20myString%20%3D%20%22Hello,%20World%21%22%0D%0Aconsole.log%28myString%29%0D%0A%0D%0AThe%20above%20code%20will%20print%20Hello,%20World%21%20on%20your%20console.%20Try%20it%20yourself%20in%20the%20editor%20on%20the%20right%21&code=let%20n%20%3D%201%0D%0Aconsole.log%28n%29&expectedoutput=Hello,%20World%21&description=Print%20a%20variable%20to%20the%20console."
            class="flex flex-row items-center h-10 px-3 text-3xl rounded-lg"
          >
            <TerminalIcon
              class="flex items-center justify-center w-12 h-12 text-3xl"
            ></TerminalIcon>
            <span class="ml-4">Hack</span>
          </NuxtLink>
        </li> -->
        <NuxtLink
          to="/challenge?title=Print&task=Here%20is%20a%20sample%20line%20of%20code%20that%20can%20be%20executed%20in%20JavaScript%3A%0D%0A%0D%0Aconsole.log%28%22Hello,%20World%21%22%29%0D%0A%0D%0AYou%20can%20just%20as%20easily%20store%20a%20string%20as%20a%20variable%20and%20then%20print%20it%20to%20the%20console%3A%0D%0A%0D%0Alet%20myString%20%3D%20%22Hello,%20World%21%22%0D%0Aconsole.log%28myString%29%0D%0A%0D%0AThe%20above%20code%20will%20print%20Hello,%20World%21%20on%20your%20console.%20Try%20it%20yourself%20in%20the%20editor%20on%20the%20right%21&code=let%20n%20%3D%201%0D%0Aconsole.log%28n%29&expectedoutput=Hello,%20World%21&description=Print%20a%20variable%20to%20the%20console."
          class="flex flex-row items-center px-8 py-4 text-3xl text-white  hover:bg-white hover:text-rhb-blue-500"
        >
          <TerminalIcon class="w-12 h-12"></TerminalIcon>
          <span class="ml-4">Hack</span>
        </NuxtLink>
        <!-- <li
          class="px-4 my-px text-white hover:bg-white hover:text-rhb-blue-500"
        >
          <NuxtLink
            to="/candidate-profile"
            class="flex flex-row items-center h-10 px-3 text-3xl rounded-lg"
          >
            <UsersIcon
              class="flex items-center justify-center w-12 h-12 text-3xl"
            ></UsersIcon>
            <span class="ml-4">Performance</span>
          </NuxtLink>
        </li> -->
        <NuxtLink
          to="/candidate-profile"
          class="flex flex-row items-center px-8 py-4 text-3xl text-white  hover:bg-white hover:text-rhb-blue-500"
        >
          <UsersIcon class="w-12 h-12"></UsersIcon>
          <span class="ml-4">Performance</span>
        </NuxtLink>
        <!-- <li
          class="px-4 my-px text-white hover:bg-white hover:text-rhb-blue-500"
        > -->
        <NuxtLink
          to="/hiring-dashboard"
          class="flex flex-row items-center px-8 py-4 text-3xl text-white  hover:bg-white hover:text-rhb-blue-500"
        >
          <ChartSquareBarIcon class="w-12 h-12"></ChartSquareBarIcon>
          <span class="ml-4">Dashboard</span>
        </NuxtLink>

        <NuxtLink
          to="/application-tracker"
          class="flex flex-row items-center px-8 py-4 text-3xl text-white  hover:bg-white hover:text-rhb-blue-500"
        >
          <UsersIcon class="w-12 h-12"></UsersIcon>
          <span class="ml-4">Application Tracker</span>
        </NuxtLink>
        <!-- </li> -->
        <!-- <li class="px-4 py-1 my-px bg-white">
          <NuxtLink
            to="/hiring-dashboard"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-rhb-blue-500"
          >
            <ChartSquareBarIcon
              class="flex items-center justify-center w-6 h-6 text-lg text-rhb-blue-500"
            ></ChartSquareBarIcon>
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li> -->
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

<style scoped>
.nuxt-link-exact-active {
  @apply bg-white text-rhb-blue-500;
}
</style>
