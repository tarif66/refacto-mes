<script setup lang="ts">
    import Button from './ui/button/Button.vue';
    import ProfilNavMenu from '@/components/ProfilNavMenu.vue';
    import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
</script>

<template>
  <div class="flex flex-row justify-between w-full bg-yellow-500 h-14">
    <div>
        <Button>
            <a href="/">
            MES logo
            </a>
        </Button>
    </div>
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">
            Olivier B.
          </Button>
        </DropdownMenuTrigger>
        <ProfilNavMenu/>
      </DropdownMenu>
    </div>
  </div>
</template>