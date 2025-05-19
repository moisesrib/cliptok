<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="min-h-screen bg-muted px-4 py-10 flex justify-center">
    <Card class="w-full max-w-3xl">
      <CardContent class="p-6 space-y-4">
        <h1 class="text-3xl font-bold">🔒 Política de Privacidade</h1>
        <Separator />
        <p>
          Esta política de privacidade descreve como o <strong>ClipTok</strong> trata seus dados.
        </p>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Coletamos apenas os dados necessários para acessar seus clipes via API da Twitch.</li>
          <li>Dados de autenticação (tokens) não são armazenados permanentemente.</li>
          <li>Seus clipes são processados e enviados ao TikTok conforme sua configuração.</li>
          <li>O ClipTok não compartilha seus dados com terceiros.</li>
          <li>O desenvolvedor não se responsabiliza por clipes que violem direitos autorais.</li>
          <li>Este serviço é de uso pessoal e não tem interface pública.</li>
        </ul>
        <p class="text-sm text-gray-500 mt-6">
          Última atualização: 18 de maio de 2025
        </p>
      </CardContent>
    </Card>
  </div>
</template>
