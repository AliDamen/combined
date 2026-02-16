<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="top">
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/drama">Drama</RouterLink>
        <RouterLink to="/comedy">Comedy</RouterLink>
        <RouterLink to="/animation">Animation</RouterLink>
        <RouterLink to="/infopeli">InfoPeli</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.top{
  padding: 10px 20px;
  background-color: rgb(65, 69, 89);
}
.nav{
  display: flex;
  gap: 40px;
}
.nav a{
  text-decoration: none;
  color: black;
  padding: 6px 12px;
  border-radius: 16px;
  background-color: bisque;
}
.nav a.router-link-exact-active{
  background-color: rgb(0, 0, 0);
  color: rgb(105, 31, 214);
}
</style>
