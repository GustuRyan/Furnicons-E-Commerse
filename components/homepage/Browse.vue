<template>
    <div class="h-full w-screen flex flex-col gap-12 px-20 py-28">
        <div class="flex flex-col text-center gap-2">
            <h1 class="font-bold text-2xl">
                Browse The Range
            </h1>
            <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>            
        </div>
        <div class="grid grid-cols-3 gap-x-16">
            <div class="flex flex-col gap-7 text-center p-4 hover:bg-neutral-100 rounded-lg">
                <img src="/public/dining-browse-image.png" class="rounded-lg w-full h-[480px] object-left" alt="">
                <span class="font-bold text-xl">
                    Dining
                </span>
            </div>
            <div class="flex flex-col gap-7 text-center p-4 hover:bg-neutral-100 rounded-lg">
                <img src="/public/bedroom-browse-image.png" class="rounded-lg w-full h-[480px] object-right" alt="">
                <span class="font-bold text-xl">
                    Living
                </span>
            </div>
            <div class="flex flex-col gap-7 text-center p-4 hover:bg-neutral-100 rounded-lg">
                <img src="/public/living-browse-image.png" class="rounded-lg w-full h-[480px] object-left" alt="">
                <span class="font-bold text-xl">
                    Bedroom
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

</script>