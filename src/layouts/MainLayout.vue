<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <header class="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 class="text-lg font-semibold">ClipTok</h1>
      <nav class="flex gap-4">
        <RouterLink to="/termos" class="text-sm text-gray-700 hover:text-black transition">
          Termos de Serviço
        </RouterLink>
        <RouterLink to="/privacidade" class="text-sm text-gray-700 hover:text-black transition">
          Política de Privacidade
        </RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
