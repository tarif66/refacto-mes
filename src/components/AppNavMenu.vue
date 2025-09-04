<script setup lang="ts">
    import Button from './ui/button/Button.vue';
    import ProfilNavMenu from '@/components/ProfilNavMenu.vue';
    import NotificationMenu from './NotificationMenu.vue';
    import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bell } from 'lucide-vue-next';

</script>

<template>
  <div class="flex flex-row p-2 justify-between w-full bg-white h-14 center-align border border-b-[#E4E9F8]">
    <div class="content-center w-95px">
      <a href="/">
        <img src="@/assets/icons/Mes.svg" alt="MES logo" />
      </a>
    </div>
    <div class="flex flex-row gap-2">
      <div class="content-center">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost">
              <Bell/>
            </Button>
          </DropdownMenuTrigger>
          <NotificationMenu/>
        </DropdownMenu>
      </div>
      <div class="content-center">
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
  </div>
</template>