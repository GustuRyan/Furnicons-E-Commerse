<template>
    <div>
        <navbar />
        <main class="min-h-screen">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import IconFooter from '~/components/Icon-Footer.vue';

const icons = ref([ 
    { header: 'High Quality', desc: 'Crafted from top materials', src: 'trophy_footer.png' },    
    { header: 'Warranty Protection', desc: 'Over 2 years', src: 'guarantee_footer.png' },    
    { header: 'Free Shipping', desc: 'Order over 150 $', src: 'shipping_footer.png' },    
    { header: '24 / 7 Support', desc: 'Dedicated support', src: 'customer-support_footer.png' }, 
])

</script>