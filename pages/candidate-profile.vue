<template>
  <main class="flex flex-col bg-tgray-900 min-h-screen text-white">
    <div class="container mx-auto py-6 px-8">
      <!-- Header -->
      <div class="flex-shrink-0">
        <h1 class="text-2xl font-semibold tracking-wide ">Profile</h1>
        <div class="my-1 h-1 w-24 bg-rhb-blue-500"></div>
      </div>

      
      <div class="flex my-6 text-white items-stretch">
        <!-- View One -->
        <div class="w-3/12 rounded-md px-4 xl:px-12">
          <ProfileCard/>
        </div>

        <!-- View Two -->
        <div class="w-9/12 rounded-md px-4">
          <SkillReportCard/>
          
        </div>
        
      </div>
      <NuxtLink
            to="/hiring-dashboard"
          >
            <button class='py-1 px-8 rounded-md border border-white text-white text-sm'>See How Pro</button>
          </NuxtLink>
    </div>
  </main>
</template>

<script>
import SkillReportCard from '~/components/SkillReportCard.vue';
export default {
  components: { SkillReportCard },};
</script>

<style scoped></style>
