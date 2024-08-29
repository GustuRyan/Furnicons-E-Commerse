<template>
    <div class="font-poppins min-w-screen">
      <Main>
        <section class="mt-24">
            <HomepageHero/>
        </section>
        <section>
            <HomepageBrowse/>
        </section>
      </Main>
    </div>
  </template>
  
  <script setup lang="ts">
  import Main from '~/layouts/main.vue';
  </script>