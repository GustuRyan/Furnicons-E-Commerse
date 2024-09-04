<template>
    <HeroImage>
        <template #header>
            Shop
        </template>
        <template #detail>
            Shop
        </template>
    </HeroImage>
    <div class="bg-secondary w-full px-8 md:px-16 lg:px-20 py-8 flex justify-between">
        <div class="flex gap-8 font-medium text-lg">
            <div class="flex items-center gap-4">
                <AdjustmentsHorizontalIcon class="size-9"/>
                <span class="hidden lg:block">
                    Filter
                </span>
            </div>
            <div class="hidden lg:block w-[2px] h-full bg-[#9F9F9F]"></div>
            <div class="hidden lg:flex items-center">
                Showing 1 - 16 of 32 results 
            </div>
        </div>
        <div class="flex gap-8">
            <div class="hidden lg:flex justify-center items-center gap-4 w-fit">
                <span class="font-medium text-lg">
                    Show
                </span>
                <div class="bg-white w-12 h-12 text-[#9F9F9F] text-xl flex items-center justify-center">
                    16
                </div>
            </div>
            <div class="flex justify-center items-center gap-4 w-fit">
                <span class="font-medium text-lg hidden lg:block">
                    Sort By
                </span>
                <button class="bg-white w-48 h-12 px-6 text-[#9F9F9F] text-xl flex justify-between items-center">
                    Default
                    <ChevronDownIcon class="size-4"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';
</script>