<template>
    <div class="flex gap-3 h-fit">
        <img :src="icon_img" alt="" class="h-[70px]">
        <div class="flex flex-col justify-between">
            <h1 class="font-bold text-2xl">
                <slot name="header"></slot>
            </h1>
            <span class="text-xl text-[#898989]">
                <slot name="description"></slot>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ icon_img: string }>();
</script>