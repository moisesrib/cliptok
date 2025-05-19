<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <header class="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <img src="../../public/login.png" alt="Logo" class="w-20 h-20">
      <nav class="flex gap-4">
        <RouterLink to="/termos" class="text-sm font-bold text-gray-700 hover:text-black transition">
          Termos de Serviço
        </RouterLink>
        <RouterLink to="/privacidade" class="text-sm font-bold text-gray-700 hover:text-black transition">
          Política de Privacidade
        </RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
