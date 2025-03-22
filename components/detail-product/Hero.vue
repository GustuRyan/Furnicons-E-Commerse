<template>
    <div>
        <div class="h-[100px] bg-secondary px-8 md:px-16 lg:px-20 flex items-center gap-3">
            <h3>
                Home
            </h3>
            <ChevronRightIcon class="size-4"/>
            <h3>
                Shop
            </h3>
            <ChevronRightIcon class="size-4"/>
            <div class="h-9 w-[1.5px] rounded-full bg-[#9F9F9F]"></div>
            <h3>
                Asgard Sofa
            </h3>
        </div>
        <div class="flex justify-between py-10 px-8 md:px-16 lg:px-20">
            <div class="w-[44%] flex justify-between">
                <div class="w-[28%] space-y-8">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                </div>
                <img src="/public/gallery-5.png" alt="" class="w-[68%] rounded-lg object-cover">
            </div>
            <div class="w-[50%] space-y-4">
                <div>
                    <h1 class="text-5xl mb-3 font-poppins">
                        Asgard sofa
                    </h1>
                    <h2 class="text-[#9F9F9F] text-2xl">
                        Rp. 7.500.000
                    </h2>
                </div>
                <div class="flex">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline';


</script>