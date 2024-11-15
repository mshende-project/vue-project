<script setup>
import Hero from "@/components/Hero.vue"; // absolute path
// @ refers for "src" directory and it will resolve to src/components/Hero.vue
// ^^ useful for larger projects
// import Hero from "./components/Hero.vue";
// ^^^ relative path it's useful when files are close to each other
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>
<template>
  <Hero title="test title" subtitle="test subtitle" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
