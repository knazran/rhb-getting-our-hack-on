<template>
  <div class='rounded-20 flex flex-col justify-between h-full bg-opacity-20' style="box-shadow: 0px 16px 60px rgba(108, 206, 230, 0.2); background-size: 100% 100%;" :style="{ backgroundImage: `url(${bgImage})`}">

    <div class='flex flex-col items-center py-6'>
        <img class='h-20 w-20 mb-4' src='~/assets/profile 1.png'>
        <h3 class='capitalize font-semibold text-lg'> Leong Yok Tien</h3>
        <p class='font-light text-xs' style='color: rgba(255, 255, 255, 0.5);'> Tech Lead @ SEEK </p>
    </div>

    <div class="bg-rhb-blue-500 bg-opacity-30 flex justify-between py-2">
        <div class='flex flex-col text-white px-4 items-center'>
            <p class='text-sm '>#98</p>
            <p class='text-xs font-light'>Rank</p>
        </div>
        <div class='flex flex-col text-white px-4 items-center'>
            <p class='text-sm '>12</p>
            <p class='text-xs font-light'>Solved</p>
        </div>
        <div class='flex flex-col text-white px-4 items-center'>
            <p class='text-sm '>109</p>
            <p class='text-xs font-light'>Score</p>
        </div>
    </div>

    <div class='flex justify-center'>
        <button class="w-4/5 bg-linkedin-blue text-white rounded-20 py-2 my-6 text-xs" >Connect with LinkedIn</button>
    </div>
    
    
  </div>
</template>

<script>
import klccImg from "~/assets/Intersect.png";

export default {
    data() {
        return {
            bgImage: klccImg,
        }
    }
}
</script>

<style>

</style>