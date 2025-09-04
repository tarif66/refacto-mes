<script setup lang="ts">
  import {
    DropdownMenuContent,
    DropdownMenuSeparator,
  } from "@/components/ui/dropdown-menu"
  import Button from "./ui/button/Button.vue";
import { CircleUser, ChevronRight, Plus, Settings, CircleQuestionMark, Users } from "lucide-vue-next";
</script>

<template>
   <DropdownMenuContent class="w-70 mx-8">

    <div class="flex flex-col justify-center center-align p-4 gap-2">
      <Users class="w-8 h-8 mx-auto my-2"/>
      <p class="text-center">Olivier Bréchon-Cornery</p>
      <Button variant="link">Identité Nationale de Santé</Button>
      <Button variant="outline">Gérer le profil</Button>
    </div>

    <DropdownMenuSeparator />

    <div class="flex flex-col justify-center center-align p-4 gap-2">
      <p>Sélectionner un profil :</p>
      <Button variant="ghost" class="justify-start">
        <CircleUser class="w-4 h-4 mr-2" />
        Alec Bréchon-Cornery
        <ChevronRight class="w-4 h-4 mr-2" />
      </Button>
      <Button variant="ghost" class="justify-start">
        <Plus class="w-4 h-4 mr-2" />
        Ajouter un profil
      </Button>
    </div>

    <DropdownMenuSeparator />

    <div class="flex flex-col justify-center center-align p-4 gap-2">
      <Button variant="ghost" class="justify-start">
        <CircleQuestionMark class="w-4 h-4 mr-2" />
        Aide
      </Button>
      <Button variant="ghost" class="justify-start">
        <Settings class="w-4 h-4 mr-2" />
        Paramètres de compte
      </Button>      
      <Button class="w-fit mx-auto">
        Se déconnecter
      </Button>
    </div>

    </DropdownMenuContent>
</template>