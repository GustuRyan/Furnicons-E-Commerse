<template>
    <button
        class="group w-full max-w-56 flex justify-center items-center border-2 px-8 py-4 text-xl transition-all duration-300 ease-in border-primary"
        :class="style">
        <slot />
        <div v-if="color === 'btn-go'" class="hidden group-hover:block">
            <ArrowRightIcon class="size-9" />
        </div>
    </button>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{ color: string }>();

const { color } = toRefs(props);
const style = ref('');

if (color.value === 'bg-primary') {
    style.value = 'bg-primary text-white hover:bg-white hover:text-primary';
}
else if (color.value === 'btn-go') {
    style.value = 'bg-primary text-white hover:bg-white hover:text-primary hover:justify-between ease-in-out delay-300 hover:max-w-full';
}
else {
    style.value = 'text-primary bg-white hover:text-white hover:bg-primary';
}
</script>