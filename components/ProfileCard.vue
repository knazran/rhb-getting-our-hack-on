<template>
  <div
    class="rounded-20 flex flex-col justify-between h-full"
    :style="{ backgroundImage: getBackgroundImage}"
    style="background-size: 100% 100%;"
    :class="getBackgroundColor"
  >
    <!-- style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2); background-size: 100% 100%;"  -->
    <div class="flex flex-col items-center py-8" :class="getTextColor">
      <img class="h-28 w-28 mb-4" src="~/assets/profile 1.png" />
      <h3 class="uppercase font-semibold text-lg">Leong Yok Tien</h3>
      <p class="font-light text-xs opacity-50" >Tech Lead @ SEEK</p>
    </div>

    <div class="flex justify-between py-2 " :class="getSectionColor">
      <div class="flex flex-col px-4 items-center">
        <p class="text-md font-semibold">#98</p>
        <p class="text-sm font-light">Rank</p>
      </div>
      <div class="flex flex-col px-4 items-center">
        <p class="text-md font-semibold">12</p>
        <p class="text-sm font-light">Solved</p>
      </div>
      <div class="flex flex-col px-4 items-center">
        <p class="text-md font-semibold">109</p>
        <p class="text-sm font-light">Score</p>
      </div>
    </div>

    <div class="flex justify-center">
      <button class="w-4/5 bg-linkedin-blue text-white rounded-20 py-2 my-6 text-xs">
        <IconifyIcon :icon="icons.linkedin" height="28" class='inline'/> <span>Connect with LinkedIn</span>
      </button>
    </div>
  </div>
</template>

<script>
import klccImg from "~/assets/Intersect.png";
import IconifyIcon from "@iconify/vue";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";

export default {
  props: {
    mode: {
      default: 'dark'
    }
  },
  computed: {
    getBackgroundImage() {
      if (this.mode === "dark") {
        return `url(${this.bgImage})`;
      }
      if (this.mode === "light") {
        return "none";
      }
    },
    getBackgroundColor() {
      if (this.mode === "light") {
        return "bg-rhb-blue-200";
      }
    },
    getTextColor(){
      if (this.mode === 'dark') {
        return "text-white"
      }
      if (this.mode === 'light') {
        return "text-gray-800"
      }
    },
    getSectionColor(){
      if (this.mode === 'dark') {
        return "bg-rhb-blue-500 bg-opacity-30 text-white"
      }
      if (this.mode === 'light') {
        return "text-gray-800"
      }
      
    }
  },
  components: {
    IconifyIcon: IconifyIcon,
  },
  data() {
    return {
      bgImage: klccImg,
      icons: {
        linkedin: linkedinFilled,
      },
    };
  },
};
</script>

<style>
</style>