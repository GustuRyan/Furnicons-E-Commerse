<template>
    <div class="w-full h-[316px] bg-hero-image image-cover flex flex-col justify-center items-center gap-6">
        <img src="/public/logo-furnicons-gold.png" alt="" class="w-16">
        <div class="flex flex-col gap-3">
            <h1 class="text-5xl font-bold">
                <slot name="header"></slot>
            </h1>
            <p class="text-center flex justify-center">
                <span class="font-bold flex items-center">
                    Home 
                    <ChevronRightIcon class="size-4 font-black mx-2"/>
                </span>
                <slot name="detail"></slot>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

</script>