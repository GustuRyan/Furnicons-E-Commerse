<template>
    <div class="w-full md:w-fit h-full py-16 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div class="space-y-10 lg:space-y-12">
            <div class="flex gap-2 lg:gap-8">
                <MapPinIcon class="size-8 min-w-8" />
                <div class="space-y-1 max-w-56">
                    <h3 class="font-bold text-2xl">
                        Address
                    </h3>
                    <p>
                        236 5th SE Avenue, New York NY10000, United States
                    </p>
                </div>
            </div>
            <div class="flex gap-2 lg:gap-8 ">
                <PhoneIcon class="size-8 min-w-8" />
                <div class="space-y-1 max-w-56">
                    <h3 class="font-bold text-2xl">
                        Phone
                    </h3>
                    <p>
                        Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789
                    </p>
                </div>
            </div>
            <div class="flex gap-2 lg:gap-8">
                <ClockIcon class="size-8 min-w-8" />
                <div class="space-y-1 max-w-56">
                    <h3 class="font-bold text-2xl">
                        Working Time
                    </h3>
                    <p>
                        Monday-Friday: 9:00 - 22:00
                        Saturday-Sunday: 9:00 - 21:00
                    </p>
                </div>
            </div>
        </div>
        <form class="space-y-12 font-semibold">
            <div class="flex flex-col gap-4">
                <label for="name">Your Name</label>
                <input type="text" name="name" id="" placeholder="Abc" class="p-4 rounded-lg border-2 md:w-[520px]">
            </div>
            <div class="flex flex-col gap-4">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="" placeholder="abc@gmail.com" class="p-4 rounded-lg border-2 md:w-[520px]">
            </div>
            <div class="flex flex-col gap-4">
                <label for="subject">Subject</label>
                <input type="text" name="subject" id="" placeholder="This is an optional" class="p-4 rounded-lg border-2 md:w-[520px]">
            </div>
            <div class="flex flex-col gap-4">
                <label for="message">Message</label>
                <input type="description" name="message" id="" placeholder="Hi! I'd like to ask about" class="p-4 pb-16 rounded-lg border-2 md:w-[520px]">
            </div>
            <ButtonPrimary :color="'btn-go'" class="rounded-md hover:max-w-[70%]">
                Submit 
            </ButtonPrimary>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/solid';



</script>