<template>
    <div>
        <div class="h-[100px] bg-secondary px-8 md:px-16 lg:px-20 flex items-center gap-3">
            <h3>
                Home
            </h3>
            <ChevronRightIcon class="size-4"/>
            <h3>
                Shop
            </h3>
            <ChevronRightIcon class="size-4"/>
            <div class="h-9 w-[1.5px] rounded-full bg-[#9F9F9F]"></div>
            <h3>
                Asgard Sofa
            </h3>
        </div>
        <div class="flex justify-between py-10 px-8 md:px-16 lg:px-20">
            <div class="w-[44%] flex justify-between">
                <div class="w-[28%] space-y-8">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                    <img src="/public/gallery-5.png" alt="" class="w-full h-32 object-cover rounded-md">
                </div>
                <img src="/public/gallery-5.png" alt="" class="w-[68%] rounded-lg object-cover">
            </div>
            <div class="w-[50%] space-y-4">
                <div>
                    <h1 class="text-5xl mb-3 font-poppins">
                        Asgard sofa
                    </h1>
                    <h2 class="text-[#9F9F9F] text-2xl">
                        Rp. 7.500.000
                    </h2>
                </div>
                <div class="flex items-center gap-6">
                    <div class="relative flex items-center h-12 w-36">
                        <img class="absolute w-full h-12" src="/public/ratings.svg" alt="">
                        <div class="w-[124px] h-6 bg-[#FFC700]"></div>
                    </div>
                    <div class="w-[1px] h-12 bg-slate-600"></div>
                    <p class="text-slate-600">
                        5 Customer Review
                    </p>
                </div>
                <p>
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
                <div class="space-y-4">
                    <span class="text-[#9F9F9F]">
                        Size
                    </span>
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded-md bg-[#B88E2F] text-white flex justify-center items-center">L</div>
                        <div class="w-8 h-8 rounded-md bg-[#F9F1E7] flex justify-center items-center">XL</div>
                        <div class="w-8 h-8 rounded-md bg-[#F9F1E7] flex justify-center items-center">XS</div>
                    </div>
                </div>
                <div class="space-y-4">
                    <span class="text-[#9F9F9F]">
                        Color
                    </span>
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded-full bg-purple-500"></div>
                        <div class="w-8 h-8 rounded-full bg-black"></div>
                        <div class="w-8 h-8 rounded-full bg-[#B88E2F]"></div>
                    </div>
                </div>
                <div class="flex gap-4 pb-4">
                    <div class="flex p-2 gap-4 rounded-md border border-black">
                        <button>-</button>
                        <input class="max-w-7 text-center" value="1"/>
                        <button>+</button>
                    </div>
                    <div class="flex p-2 gap-4 rounded-md border border-black">
                        Add To Cart
                    </div>
                    <div class="flex p-2 gap-4 rounded-md border border-black">
                        + Compare
                    </div>
                </div>
                <div class="w-full h-[1px] bg-slate-200"></div>
                <div class="flex gap-3 text-[#9F9F9F]">
                    <div class="space-y-2 min-w-20">
                        <p>SKU</p>
                        <p>Category</p>
                        <p>Tags</p>
                        <p>Share</p>
                    </div>
                    <div class="space-y-2">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div class="space-y-2">
                        <p>SS001</p>
                        <p>Sofas</p>
                        <p>Sofa, Chair, Home, Shop</p>
                        <div class="flex gap-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline';

</script>