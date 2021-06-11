<template>
  <main class="flex flex-col ">

    <!-- Header -->
    <div class="bg-gray-900">
      <div class="container mx-auto py-8 px-8">
        <h1 class="font-semibold text-2xl text-white">Open Challenges</h1>
      </div>
      
    </div>

    <!-- Main -->
    <div class="py-8 px-8 grid grid-cols-3 gap-6 container mx-auto">
      <div 
        v-for='challenge in challengeList' 
        :key="challenge.key"
        class='py-3 px-6 pr-2 bg-white shadow-lg'
      >
        <p class='text-xs font-light text-right text-gray-400'> {{challenge.num_question}} </p>
        <h3 class='font-bold text-2xl tracking-relaxed text-gray-800 my-2'> {{challenge.title}} </h3>
        <p class='text-sm font-light text-gray-500'> {{challenge.description}} </p>

        <NuxtLink
          to="/challenge"
        >
          <button class='px-12 py-2 mb-4 bg-white rounded shadow-md border border-green-500 hover:bg-green-500 text-green-500 hover:text-white font-bold mt-8 text-sm'>
            Take Challenge
          </button>
        </NuxtLink>
        
      </div>
    </div>
  </main>
</template>

<script>
import challengesConfigList from '~/data/challenges.json';

export default {
  data() {
    return {
    }
  },

  computed: {
    challengeList() {
      // return this.$store.getters.getChallenges
      console.log(challengesConfigList)
      return challengesConfigList['challenges']
    },
  },
};
</script>

<style scoped></style>
