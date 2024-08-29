<template>
    <div class="fixed top-0 w-full h-24 flex justify-between items-center px-8 md:px-20 bg-white shadow-sm z-20 transition-all">
        <NuxtLink :to="'/'" class="flex gap-2 items-center">
            <img src="/public/logo-furnicons-gold.png" alt="" class="w-14">
            <span class="hidden lg:block font-black text-2xl font-montserrat">
                Furnicons
            </span>
        </NuxtLink>
        <ul class="hidden md:flex font-poppins font-semibold text-lg gap-10 xl:gap-20 transition-all">
            <NuxtLink :to="'/'" class="hover:text-slate-600">
                Home
            </NuxtLink>
            <NuxtLink :to="'/'" class="hover:text-slate-600">
                Shop
            </NuxtLink>
            <NuxtLink :to="'/'" class="hover:text-slate-600">
                About
            </NuxtLink>
            <NuxtLink :to="'/'" class="hover:text-slate-600">
                Contact
            </NuxtLink>
        </ul>
        <ul class="hidden md:flex gap-4 xl:gap-10 transition-all">
            <NuxtLink :to="'/'">
                <UserIcon class="size-7 hover:text-blue-500 hover:fill-blue-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
            <NuxtLink :to="'/'">
                <MagnifyingGlassIcon class="size-7 hover:fill-slate-500 hover:text-slate-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
            <NuxtLink :to="'/'">
                <HeartIcon class="size-7 hover:fill-red-500 hover:text-red-500 transition ease-in-out hover:-translate-y-1" />
            </NuxtLink>
            <NuxtLink :to="'/'">
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