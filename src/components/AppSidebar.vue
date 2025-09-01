<script setup lang="ts">
import { Calendar, FolderOpen, HeartPulse, Home, Inbox, LayoutGrid, Search, Settings, Syringe, UserRoundCheck } from "lucide-vue-next"
import { RouterLink } from "vue-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    title: "Profil Médical",
    url: "/profil-medical",
    icon: UserRoundCheck,
  },
  {
    title: "Vaccinations",
    url: "/vaccinations",
    icon: Syringe,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: FolderOpen,
  },
  {
    title: "Messagerie",
    url: "/messagerie",
    icon: Inbox,
  },
  {
    title: "Prévention",
    url: "/prevention",
    icon: HeartPulse,
  },
  {
    title: "Agenda",
    url: "/agenda",
    icon: Calendar,
  },
  {
    title: "Catalogue de services",
    url: "/catalogue-de-services",
    icon: LayoutGrid,
  },
];
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
              <SidebarMenuItem v-for="item in items" :key="item.title">
                <SidebarMenuButton class="flex-col h-16" asChild size="sm">
                    <RouterLink  :to="item.url">
                      <component :is="item.icon" />
                      <span>{{item.title}}</span>
                    </RouterLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>