<template>
    <div class="w-full h-24 flex justify-between items-center px-20 font-['Poppins'] shadow-sm">
        <NuxtLink :to="'/'" class="flex gap-2 items-center">
            <img src="/public/logo-furnicons-gold.png" alt="" class="w-14">
            <span class="font-black text-2xl font-montserrat">
                Furnicons
            </span>
        </NuxtLink>
        <ul class="font-poppins font-semibold text-lg flex gap-20">
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
        <ul class="flex gap-10">
            <NuxtLink :to="'/'">
                <UserIcon class="size-7 hover:fill-blue-500 hover:text-blue-500" />
            </NuxtLink>
            <NuxtLink :to="'/'">
                <MagnifyingGlassIcon class="size-7 hover:fill-slate-500 hover:text-slate-500" />
            </NuxtLink>
            <NuxtLink :to="'/'">
                <HeartIcon class="size-7 hover:fill-red-500 hover:text-red-500" />
            </NuxtLink>
            <NuxtLink :to="'/'">
                <ShoppingCartIcon class="size-7 hover:fill-yellow-500 hover:text-yellow-500" />
            </NuxtLink>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
</script>