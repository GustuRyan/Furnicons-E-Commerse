<template>
    <div class="flex flex-col items-center text-center lg:text-start lg:flex-row gap-8 lg:gap-4 h-fit max-w-[480px]">
        <img :src="icon_img" alt="" class="w-fit h-24 lg:max-h-[70px]">
        <div class="flex flex-col gap-4 lg:justify-between">
            <h1 class="font-bold text-3xl sm:text-4xl lg:text-2xl">
                <slot name="header"></slot>
            </h1>
            <span class="text-2xl sm:text-3xl lg:text-xl text-[#898989]">
                <slot name="description"></slot>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ icon_img: string }>();
</script>