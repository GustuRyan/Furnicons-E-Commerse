<template>
    <Main>
        <section class="mt-24">
            <HeroImage>
                <template #header>
                    Contact
                </template>
                <template #detail>
                    Contact
                </template>
            </HeroImage>
        </section>
        <section class="px-8 md:px-16 lg:px-20">
            <ContactHeader />
        </section>
        <section class="flex justify-center px-8 md:px-16 lg:px-20">
            <ContactContent />
        </section>
    </Main>
</template>

<script setup lang="ts">
import Main from '~/layouts/main.vue';


</script>