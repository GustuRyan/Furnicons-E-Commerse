<template>
    <div class="h-full w-full flex flex-col items-center gap-12 px-8 sm:px-16 lg:px-20 py-14">
        <h1 class="text-2xl font-bold">
            Our Products
        </h1>
        <div class="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <HomepageOurProductCard />
            <HomepageOurProductCard />
            <HomepageOurProductCard />
            <HomepageOurProductCard />
            <HomepageOurProductCard />
            <HomepageOurProductCard />
            <HomepageOurProductCard />
            <HomepageOurProductCard />
        </div>
        <button class="border-2 border-primary px-20 py-4 text-xl text-primary hover:text-white hover:bg-primary transition-colors duration-300 ease-in">
            Show More
        </button>
    </div>
</template>

<script setup lang="ts">

</script>