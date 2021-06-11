<template>
  <div class="flex flex-col h-screen">
    <NavBar />
    <section class="overflow-auto bg-gray-700 no-scrollbar h-screen">
      <Nuxt />
    </section>
    
  </div>
</template>

<script>
export default {
};
</script>

<style>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
