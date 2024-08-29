<template>
    <div class="flex flex-col min-h-screen">
      <Header :key="$route.fullPath"></Header>
      <slot/>
      <div class="flex-grow justify-center"></div>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  