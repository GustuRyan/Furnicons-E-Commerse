<template>
    <div class="w-full h-full flex flex-col-reverse md:flex-row justify-between bg-secondary py-12 gap-10">
        <div class="flex flex-col justify-center gap-2 max-w-[480px] px-8 md:pl-10 md:pr-0 lg:pl-24">
            <h1 class="text-[40px] font-bold leading-[52px]">
                50+ Beautiful rooms
                inspiration
            </h1>
            <p>
                Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <div class="max-w-72 mt-6">
                <ButtonPrimary :color="'btn-go'">
                    Explore More
                </ButtonPrimary>
            </div>
        </div>
        <div class="w-full md:w-[60%] h-[582px]">
            <swiper :style="{
                '--swiper-navigation-color': '#B88E2F',
                '--swiper-pagination-color': '#B88E2F',
                }" :modules="modules" :breakpoints="breakpoints" :space-between="24" navigation
                :pagination="{ clickable: true }" class="h-full w-full">
                <swiper-slide data-aos="zoom-in" class="relative">
                    <HomepageSliderCard />
                </swiper-slide>
                <swiper-slide data-aos="zoom-in" class="relative">
                    <HomepageSliderCard />
                </swiper-slide>
                <swiper-slide data-aos="zoom-in" class="relative">
                    <HomepageSliderCard />
                </swiper-slide>
                <swiper-slide data-aos="zoom-in" class="relative">
                    <HomepageSliderCard />
                </swiper-slide>
                <swiper-slide data-aos="zoom-in" class="relative">
                    <HomepageSliderCard />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArrowRightIcon } from '@heroicons/vue/24/outline';

const modules = [Navigation, Pagination, Scrollbar, A11y]

const breakpoints = {
    320: {
        slidesPerView: 1.5,
    },
    768: {
        slidesPerView: 2.2,
    },
};
</script>