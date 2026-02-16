<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="top">

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
</style>
