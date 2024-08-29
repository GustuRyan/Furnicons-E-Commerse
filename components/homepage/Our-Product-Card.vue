<template>
    <div class="relative flex flex-col w-full h-fit group">
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
        <div class="absolute hidden group-hover:flex w-full h-full top-0 bg-[#3A3A3A] opacity-80">
        </div>
        <div class="absolute hidden group-hover:flex justify-center items-center w-full h-full top-0">
            <div class="w-full flex flex-col items-center gap-4">
                <button class="w-fit px-12 py-3 bg-white text-primary hover:text-primary hover:bg-white">
                    Add to cart
                </button>
                <div class="w-full px-6 flex justify-between text-white text-lg">
                    <button class="flex items-center gap-2">
                        <ShareIcon class="size-5"/>
                        Share
                    </button>
                    <button class="flex items-center gap-2">
                        <ArrowsRightLeftIcon class="size-5"/>
                        Compare
                    </button>
                    <button class="flex items-center gap-2">
                        <HeartIcon class="size-5"/>
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