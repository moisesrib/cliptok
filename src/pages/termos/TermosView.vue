<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="min-h-screen bg-muted px-4 py-10 flex justify-center">
    <Card class="w-full max-w-3xl">
      <CardContent class="p-6 space-y-4">
        <h1 class="text-3xl font-bold">📄 Termos de Serviço</h1>
        <Separator />
        <p>
          Bem-vindo ao <strong>ClipTok</strong>, um aplicativo pessoal que permite publicar clipes da Twitch diretamente no TikTok.
        </p>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Este aplicativo é de uso pessoal e opera sem interface pública.</li>
          <li>Os clipes são acessados via API oficial da Twitch com permissão do usuário.</li>
          <li>Publicações no TikTok são feitas via API ou processo autorizado.</li>
          <li>O desenvolvedor não se responsabiliza por clipes que violem direitos autorais.</li>
          <li>Este serviço pode ser modificado ou descontinuado a qualquer momento.</li>
        </ul>
        <p class="text-sm text-gray-500 mt-6">
          Última atualização: 18 de maio de 2025
        </p>
      </CardContent>
    </Card>
  </div>
</template>
