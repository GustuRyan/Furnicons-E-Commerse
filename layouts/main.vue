<template>
    <div>
        <navbar />
        <main class="min-h-screen">
            <slot />
        </main>
        <div class="w-full py-28 px-8 bg-secondary flex flex-col items-center gap-20 lg:gap-4 lg:flex-row lg:justify-between">
            <IconFooter v-for="icon in icons" :icon_img="icon.link">
                <template #header>
                    {{ icon.header }}
                </template>
                <template #description>
                    {{ icon.desc }}
                </template>
            </IconFooter>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import IconFooter from '~/components/Icon-Footer.vue';

const icons = ref([ 
    { header: 'High Quality', desc: 'Crafted from top materials', link: '/trophy_footer.png' },  
    { header: 'Warranty Protection', desc: 'Over 2 years', link: '/guarantee_footer.png' },    
    { header: 'Free Shipping', desc: 'Order over 150 $', link: '/shipping_footer.png' },    
    { header: '24 / 7 Support', desc: 'Dedicated support', link: '/customer-support_footer.png' }, 
])
</script>