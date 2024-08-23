<template>
    <footer class="w-full h-full px-20 py-12 flex flex-col gap-8">
        <div class="flex justify-between mb-4">
            <div class="flex flex-col gap-16">
                <h2 class="font-bold text-xl">
                    Furnicons.
                </h2>
                <p class="w-[264px] text-[#9F9F9F]">
                    400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA
                </p>
            </div>
            <div class="flex gap-24 mr-20">
                <div class="flex flex-col gap-16">
                    <h2 class="text-[#9F9F9F]">
                        Links
                    </h2>
                    <ul class="flex flex-col font-bold gap-10">
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
                </div>
                <div class="flex flex-col gap-16">
                    <h2 class="text-[#9F9F9F]">
                        Links
                    </h2>
                    <ul class="flex flex-col font-bold gap-10">
                        <NuxtLink :to="'/'" class="hover:text-slate-600">
                            Payment Options
                        </NuxtLink>
                        <NuxtLink :to="'/'" class="hover:text-slate-600">
                            Returns
                        </NuxtLink>
                        <NuxtLink :to="'/'" class="hover:text-slate-600">
                            Privacy Policies
                        </NuxtLink>
                    </ul>
                </div>
                <div class="flex flex-col gap-16">
                    <h2 class="text-[#9F9F9F]">
                        Newsletter
                    </h2>
                    <div class="flex gap-3">
                        <input type="text" class="border-b-2 border-black py-2" placeholder="Enter Your Email Address">
                        <button class="flex flex-col gap-2 border-b-2 border-black hover:border-b-4 hover:border-[#B88E2F] group">
                            <span class="font-bold mt-2 transition ease-in-out group-hover:text-[#B88E2F] group-hover:-translate-y-1">
                                SUBSCRIBE
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[2px] rounded-full bg-[#D9D9D9]"></div>
        <h4>
            2024 Furnicons. All rights reserved
        </h4>
    </footer>
</template>