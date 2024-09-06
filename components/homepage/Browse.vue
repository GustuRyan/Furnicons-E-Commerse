<template>
    <div class="h-full w-full flex flex-col gap-12 px-8 md:px-16 lg:px-20 py-14">
        <div class="flex flex-col text-center gap-2">
            <h1 class="font-bold text-2xl">
                Browse The Range
            </h1>
            <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>            
        </div>
        <div class="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div v-for="browse in browses" data-aos="fade-up" data-aos-duration="1500" class="group flex flex-col gap-4 sm:gap-7 text-center hover:scale-105 hover:bg-sec_light rounded-lg hover:pb-4 sm:hover:pb-7 transition-all">
                <img :src="browse.image" class="rounded-lg w-full h-fit lg:h-[480px] object-cover object-left transition-all" alt="">
                <span class="font-bold text-2xl sm:text-3xl lg:text-xl transition-all group-hover:text-3xl sm:group-hover:text-4xl lg:group-hover:text-2xl">
                    {{ browse.title }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const browses = ref([
    { title: 'Dining', image: '/dining-browse-image.png' },
    { title: 'Living', image: '/living-browse-image.png' },
    { title: 'Bedroom', image: '/bedroom-browse-image.png'},
])
</script>