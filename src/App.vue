<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import AppSidebar from './components/AppSidebar.vue';
  import SidebarProvider from './components/ui/sidebar/SidebarProvider.vue';
  import AppNavMenu from './components/AppNavMenu.vue';
</script>

<template>
  <AppNavMenu class="w-full bg-yellow-500"/>
  <SidebarProvider :defaultOpen="true">
    <AppSidebar class="top-14"  />
    <main class="w-screen">
      <RouterView />
    </main>
  </SidebarProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
