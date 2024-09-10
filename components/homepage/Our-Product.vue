<template>
    <div class="h-full w-full flex flex-col items-center gap-12 px-8 md:px-16 lg:px-20 py-14">
        <h1 class="text-2xl font-bold">
            Our Products
        </h1>
        <div data-aos="zoom-in" data-aos-duration="800" class="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
            <OurProductCard />
        </div>
        <div class="max-w-80">
            <ButtonPrimary :color="'text-primary'">
                Show More
            </ButtonPrimary>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>