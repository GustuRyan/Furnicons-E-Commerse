<template>
    <div class="flex gap-3 h-fit">
        <img :src="'/public/' + icon" alt="" class="h-[70px]">
        <img src="/public/guarantee_footer.png" alt="" class="h-[70px]">
        <div class="flex flex-col">
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
const props = defineProps<{ icon: string }>();
</script>