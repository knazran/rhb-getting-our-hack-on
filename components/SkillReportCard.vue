<template>
  <div class="relative rounded-20 py-3 pr-4 pl-6 h-full w-full" :class="getBackgroundColor">
    <!-- style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);" -->
    <!-- Header -->
    <span class="text-xl font-semibold" :class="getHeaderTextColor">Node.js: </span>
    <span class="font-semibold  text-xl" :class="getAccentTextColor">Proficient</span>
    <h4 class="text-xs text-gray-400">Verified: 10 December 2018</h4>

    <div class="absolute inset-y-1 right-0 p-2">
      <!-- Heroicon name: solid/chevron-right -->
      <DotsVerticalIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-700"></DotsVerticalIcon>
    </div>
    <!-- Chart -->
    <SkillReportChart :mode="mode" />
  </div>
</template>

<script>
import { DotsVerticalIcon } from "@vue-hero-icons/outline";

export default {
  props: {
    mode: {
      default: "dark",
    },
  },
  components: {
    DotsVerticalIcon,
  },
  computed: {
    getBackgroundColor() {
      if (this.mode === "dark") {
        return "bg-tgray-700";
      }
      if (this.mode === "light") {
        return "bg-white";
      }
    },
    getHeaderTextColor() {
      if (this.mode === "dark") {
        return "text-white";
      }
      if (this.mode === "light") {
        return "text-gray-800";
      }
    },
    getAccentTextColor() {
      if (this.mode === "dark") {
        return "text-green-300";
      }
      if (this.mode === "light") {
        return "text-conifer-500";
      }
    },
  },
};
</script>

<style>
</style>