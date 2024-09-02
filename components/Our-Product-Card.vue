<template>
    <div class="relative flex flex-col w-full h-fit transition-all hover:scale-105 group/card">
        <div class="absolute w-full flex justify-end p-4">
            <div class="flex justify-center items-center rounded-full w-12 h-12 bg-[#E97171] text-white">
                30%
            </div>
        </div>
        <img src="/public/bedroom-browse-image.png" alt="" class="w-full h-[360px] object-cover">
        <div class="bg-[#F4F5F7] p-3 w-full h-36">
            <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold">
                    Lorem Ipsum
                </h2>
                <span class="text-[#898989]">
                    Lorem ipsum dolor sit amet
                </span>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold">
                        Rp 2.000.000
                    </span>
                    <span class="text-sm text-[#898989] line-through">
                        Rp 3.000.000
                    </span>
                </div>
            </div>
        </div>
        <div class="absolute hidden group-hover/card:flex w-full h-full top-0 bg-[#3A3A3A] opacity-80">
        </div>
        <div class="absolute flex opacity-0 hover:opacity-100 justify-center items-center w-full h-full top-0">
            <div class="w-full flex flex-col items-center gap-4">
                <div class="w-fit">
                    <ButtonPrimary class="py-2" :color="'bg-white'">
                        Add to cart
                    </ButtonPrimary>
                </div>
                <div class="w-full px-3 md:px-4 flex gap-4 justify-center text-white text-lg">
                    <button class="flex items-center md:gap-1 hover:text-blue-400  group/share">
                        <ShareIcon class="size-5 group-hover/share:fill-blue-400"/>
                        Share
                    </button>
                    <button class="flex items-center md:gap-1 hover:text-yellow-500 group/compare">
                        <ArrowsRightLeftIcon class="size-5 group-hover/compare:fill-yellow-500"/>
                        Compare
                    </button>
                    <button class="flex items-center md:gap-1 hover:text-red-500 group/like">
                        <HeartIcon class="size-5 group-hover/like:fill-red-500"/>
                        Like
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { HeartIcon, ShareIcon, ArrowsRightLeftIcon } from '@heroicons/vue/24/outline';


</script>