<template>
  <div class="flex flex-col h-screen">
    <section class="overflow-auto bg-gray-200 no-scrollbar h-[92vh]">
      <Nuxt />
    </section>
    <NavBar />
  </div>
</template>

<script>
export default {};
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
