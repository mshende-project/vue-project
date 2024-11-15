<script setup>
import { defineProps } from "vue";
defineProps({
  bg: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>
<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <!-- class should wrap in `` double ticks because everything inside "" double quotes is javascript -->
    <slot></slot>
    <!-- slot is same as {{  children }} in react to embed childrens -->
  </div>
</template>
