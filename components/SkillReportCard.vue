<template>
  <div
    class="relative rounded-20 py-3 pr-4 pl-6 bg-gray-700 h-full w-full"
    style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2);"
    >
    <!-- Header -->
    <span class="text-md font-semibold text-white">Node.js:</span> <span class='font-semibold text-green-300 text-md'>Proficient</span>
    <h4 class="text-xs text-gray-400">Verified: 10 December 2018</h4>
    
    <div class="absolute inset-y-1 right-0 p-2">
        <!-- Heroicon name: solid/chevron-right -->
        <DotsVerticalIcon class="h-6 w-6 text-gray-400 group-hover:text-gray-700"></DotsVerticalIcon>
    </div>
    <!-- Chart -->
    <SkillReportChart/>
    </div>
</template>

<script>
import { DotsVerticalIcon } from "@vue-hero-icons/outline";

export default {
    components: {
        DotsVerticalIcon
    }

}
</script>

<style>

</style>