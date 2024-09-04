<template>
    <div class="fixed top-0 w-full h-24 flex justify-between items-center px-8 md:px-16 lg:px-20 bg-white shadow-sm z-20 transition-all">
        <NuxtLink :to="'/'" class="flex gap-2 items-center">
            <img src="/public/logo-furnicons-gold.png" alt="" class="w-14">
            <span class="hidden lg:block font-black text-2xl font-montserrat">
                Furnicons
            </span>
        </NuxtLink>
        <ul class="hidden md:flex font-poppins font-semibold text-lg gap-10 xl:gap-20 transition-all">
            <NuxtLink :to="'/'" class="hover:text-slate-600" active-class="text-primary">
                Home
            </NuxtLink>
            <NuxtLink :to="'/shop'" class="hover:text-slate-600" active-class="text-primary">
                Shop
            </NuxtLink>
            <NuxtLink :to="'/about'" class="hover:text-slate-600" active-class="text-primary">
                About
            </NuxtLink>
            <NuxtLink :to="'/contact'" class="hover:text-slate-600" active-class="text-primary">
                Contact
            </NuxtLink>
        </ul>
        <ul class="hidden md:flex gap-4 xl:gap-10 transition-all">
            <NuxtLink :to="'/user'" active-class="text-blue-500 fill-blue-500">
                <UserIcon class="size-7 hover:text-blue-500 hover:fill-blue-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
            <NuxtLink :to="'/search'" active-class="text-slate-500 fill-slate-500">
                <MagnifyingGlassIcon class="size-7 hover:fill-slate-500 hover:text-slate-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
            <NuxtLink :to="'/like'" active-class="text-red-500 fill-red-500">
                <HeartIcon class="size-7 hover:fill-red-500 hover:text-red-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
            <NuxtLink :to="'/cart'" active-class="text-yellow-500 fill-yellow-500">
                <ShoppingCartIcon class="size-7 hover:fill-yellow-500 hover:text-yellow-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
        </ul>
        <div class="block md:hidden">
            <Bars3Icon class="size-9 transition-all ease-in-out hover:size-10 hover:text-primary"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bars3Icon, UserIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
</script>