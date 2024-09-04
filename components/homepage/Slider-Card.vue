<template>
    <img src="/public/dining-browse-image.png" alt="" class="w-full h-full object-cover">
    <div class="absolute w-full flex flex-col-reverse xl:flex-row xl:items-end p-6 lg:p-4 bottom-0">
        <div class="relative w-fit lg:min-w-56 h-32">
            <div class="w-full h-full flex flex-col justify-center p-3 lg:p-6 z-10 bg-white/75">
                <p class="text-[#616161] font-bold z-10 flex items-center gap-2">
                    <span>
                        01
                    </span>
                <div class="w-8 h-[2px] bg-[#616161]"></div>
                <span>
                    Bed Room
                </span>
                </p>
                <h2 class="text-3xl font-bold z-10">
                    Inner Peace
                </h2>
            </div>
        </div>
        <div class="w-[50%]">
            <ButtonPrimary class="px-0 lg:w-[80%]" :color="'bg-primary'">
                <ArrowRightIcon class="size-9 min-w-8 transition-all group-hover:translate-x-4" />
            </ButtonPrimary>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
</script>