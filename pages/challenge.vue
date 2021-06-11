<template>
  <main class="flex flex-col bg-gray-900 min-h-screen ">
    
    <!-- Header -->
    <div class='container mx-auto py-4 px-8'>
      <div class='relative flex items-stretch'>
        <h2 class="text-white text-lg">Challenge</h2>
        <NuxtLink
          to="/candidate-profile"
        >
          <button class='py-1 px-8 rounded-md border border-white text-white text-sm absolute inset-y-0 right-0'>Submit Task</button>
        </NuxtLink>
      </div>
    </div>
    
    
    <div class="grid grid-cols-2">
      <!-- Problem Statement -->
      <div class='min-h-screen border border-l-0 border-white'></div>

      <!-- Interactive Env -->
      <div class='min-h-screen border border-r-0 border-white'></div>
    </div>

    
  </main>
</template>

<script>
export default {};
</script>

<style scoped></style>
