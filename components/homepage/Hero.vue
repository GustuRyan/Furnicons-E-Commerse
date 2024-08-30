<template>
    <div class="relative w-full h-screen flex items-center">
        <div class="w-full flex justify-center md:justify-end px-0 md:px-16 z-10">
            <article class="p-8 md:p-16 bg-secondary rounded-md shadow-lg transition-all scale-[.85] w-full md:w-fit md:scale-100 hover:scale-90 md:hover:scale-105">
                <div class="flex flex-col gap-12 z-20">
                    <div class="flex flex-col gap-4">
                        <h4 class="font-semibold tracking-wider">
                            New Arrival
                        </h4>
                        <h1 class="max-w-sm text-5xl md:text-[52px] font-bold text-primary md:leading-[64px]">
                            Discover Our New Collection
                        </h1>
                        <p class="text-lg max-w-lg font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                    </div>
                    <button class="group flex justify-center hover:justify-between items-center px-8 py-6 bg-primary w-52 font-bold text-white transition-all ease-in-out delay-300 hover:w-full hover:text-xl hover:opacity-90">
                        BUY NOW
                        <div class="hidden group-hover:block">
                            <ArrowRightIcon class="size-9"/>
                        </div>
                    </button>
                </div>
            </article>
        </div>

        <div class="absolute w-full h-screen top-0 z-0">
            <img src="/public/home-hero-background.png" alt="homepage-hero-image" class="h-screen w-screen object-cover lg:object-fill">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

</script>