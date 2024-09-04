<template>
    <div class="p-8 md:p-16 lg:p-20 space-y-12">
        <div class="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
        </div>
        <div class="w-full flex justify-center gap-2 md:gap-4 lg:gap-6">
            <NuxtLink :to="'/shop'" class="w-14 h-14 bg-secondary rounded-md flex justify-center items-center text-lg font-medium hover:bg-[#eedfcb] transition ease-in-out hover:-translate-y-1" active-class="bg-[#B88E3F] hover:bg-[#B88E3F] text-white">
                1
            </NuxtLink>
            <NuxtLink :to="'/'" class="w-14 h-14 bg-secondary rounded-md flex justify-center items-center text-lg font-medium hover:bg-[#eedfcb] transition ease-in-out hover:-translate-y-1" active-class="bg-[#B88E3F] hover:bg-[#B88E3F] text-white">
                2
            </NuxtLink>
            <NuxtLink :to="'/'" class="w-14 h-14 bg-secondary rounded-md flex justify-center items-center text-lg font-medium hover:bg-[#eedfcb] transition ease-in-out hover:-translate-y-1" active-class="bg-[#B88E3F] hover:bg-[#B88E3F] text-white">
                3
            </NuxtLink>
            <NuxtLink :to="'/'" class="w-fit h-14 px-6 bg-secondary rounded-md flex justify-center items-center text-lg font-medium hover:bg-[#eedfcb] group">
                Next
                <ArrowRightIcon class="transition-all delay-200 group-hover:size-7 group-hover:translate-x-4"/>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
</script>