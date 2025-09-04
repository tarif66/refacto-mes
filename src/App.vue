<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import AppSidebar from './components/AppSidebar.vue';
  import SidebarProvider from './components/ui/sidebar/SidebarProvider.vue';
  import AppNavMenu from './components/AppNavMenu.vue';
</script>

<template>
  <div>
    <div class="bg-[#0C429E] z-40 w-2 h-full absolute"></div>
    <div>  
      <header class="ml-1 mr-1">
        <AppNavMenu />
      </header>
      <header>
        <SidebarProvider :defaultOpen="true">
          <AppSidebar class="top-14 left-1"  />
        </SidebarProvider> 
      </header>
    </div>
  </div>

  <main class="w-screen bg-[#F8F9FF]">
    <RouterView />
  </main>
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
