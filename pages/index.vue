<template>
  <div class="font-poppins min-w-screen">
    <NoIconFooter>
      <section class="mt-24">
        <HomepageHero />
      </section>
      <section>
        <HomepageBrowse />
      </section>
      <section>
        <HomepageOurProduct />
      </section>
      <section>
        <HomepageSlider />
      </section>
      <section>
        <HomepageGallery />
      </section>
    </NoIconFooter>
  </div>
</template>

<script setup lang="ts">
import Main from '~/layouts/main.vue';
import NoIconFooter from '~/layouts/no-icon-footer.vue';
</script>