<template>
  <main class="flex flex-col bg-gray-900 min-h-screen">
    <div class="container mx-auto py-4 px-8">
      <!-- Header -->
      <div class="relative flex items-stretch">
        <h2 class="text-white text-lg">Candidate Profile</h2>
      </div>

      
      <div class="flex my-6 text-white">
        <!-- View One -->
        <div class="bg-gray-800 w-5/12 h-64 rounded-md p-4">
          <p>Something about your mad skillz</p>
        </div>

        <!-- View Two -->
        <div class="ml-1 bg-gray-800 w-7/12 h-64 rounded-md p-4">
          <p>Based on our AI (Alot-of-Ifelse), you are a pro</p>
          <NuxtLink
            to="/hiring-dashboard"
          >
            <button class='py-1 px-8 rounded-md border border-white text-white text-sm'>See How Pro</button>
          </NuxtLink>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped></style>
