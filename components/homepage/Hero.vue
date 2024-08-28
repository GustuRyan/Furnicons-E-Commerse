<template>
    <div class="relative w-full h-screen flex items-center">
        <div class="w-full flex justify-end px-16 z-10">
            <article class="p-16 bg-[#FFF3E3] rounded-md shadow-lg">
                <div class="flex flex-col gap-12 z-20">
                    <div class="flex flex-col gap-4">
                        <h4 class="font-semibold tracking-wider">
                            New Arrival
                        </h4>
                        <h1 class="max-w-sm text-[52px] font-bold text-[#B88E2F] leading-[64px]">
                            Discover Our New Collection
                        </h1>
                        <p class="text-lg max-w-lg font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                    </div>
                    <button class="py-6 bg-[#B88E2F] w-52 font-bold text-white transition-all ease-in-out hover:w-full hover:text-xl hover:opacity-90">
                        BUY NOW
                    </button>
                </div>
            </article>
        </div>

        <div class="absolute h-screen top-0 z-0">
            <img src="/public/home-hero-background.png" alt="homepage-hero-image" class="h-screen w-screen">
        </div>
    </div>
</template>

<script lang="ts">
</script>