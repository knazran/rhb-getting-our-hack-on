<template>
  <main class="flex flex-col container mx-auto">

    <!-- Header -->
    <div class="py-8 px-8 bg-gray-900">
      <h1 class="font-semibold text-2xl text-white">Open Challenges</h1>
    </div>

    <!-- Main -->
    <div class="py-8 px-8 grid grid-cols-3 gap-4">
      <div 
        v-for='challenge in challengeList' 
        :key="challenge.key"
        class='py-4 px-8 bg-white'
      >
        <h3 class='font-semibold text-xl tracking-relaxed'> {{challenge.title}} </h3>
        <p class='text-sm font-light'> {{challenge.description}} </p>

        <NuxtLink
          to="/challenge"
        >
          <button class='px-8 py-2 bg-white border border-green-500 hover:bg-green-500 text-green-500 hover:text-white font-bold mt-8'>
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
