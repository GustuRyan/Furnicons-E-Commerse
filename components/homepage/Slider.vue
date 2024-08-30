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
            <swiper :modules="modules" :breakpoints="breakpoints" :space-between="24" navigation
                :pagination="{ clickable: true }" class="h-full w-full">
                <swiper-slide class="relative">
                    <img src="/public/dining-browse-image.png" alt="" class="w-full h-full object-cover">
                    <div class="absolute w-full flex flex-col-reverse xl:flex-row xl:items-end p-6 lg:p-4 bottom-0"> 
                        <div class="relative w-fit lg:min-w-60 h-32">
                            <div class="w-full h-full flex flex-col justify-center p-3 lg:p-8 z-10">
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
                            <div class="absolute top-0 bg-white opacity-75 w-full h-full z-0"></div>
                        </div>
                        <div class="w-[56%] xl:w-full">
                            <ButtonPrimary class="px-4 max-w-14" :color="'btn-go'">
                                <ArrowRightIcon class="size-9 min-w-9 group-hover:opacity-0 group-hover:size-0 group-hover:min-w-0"/>
                            </ButtonPrimary>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="/public/dining-browse-image.png" alt="" class="w-full h-full max-h-[480px] object-cover">
                </swiper-slide>
                <swiper-slide>
                    <img src="/public/dining-browse-image.png" alt="" class="w-full h-full max-h-[480px] object-cover">
                </swiper-slide>
                <swiper-slide>
                    <img src="/public/dining-browse-image.png" alt="" class="w-full h-full max-h-[480px] object-cover">
                </swiper-slide>
                <swiper-slide>
                    <img src="/public/dining-browse-image.png" alt="" class="w-full h-full max-h-[480px] object-cover">
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

const onSwiper = (swiper: any) => {
    console.log(swiper);
};

const breakpoints = {
  320: {
    slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2.2,
  },
};
</script>