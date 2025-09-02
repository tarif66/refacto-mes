<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu class="bg-red-500 w-auto h-14">

    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
            logo MES
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Notifications</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    <NavigationMenuItem>
        <NavigationMenuTrigger>Olivier B.</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>

  </NavigationMenu>
</template>