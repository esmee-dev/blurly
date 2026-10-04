<script setup lang="ts">
defineProps<{
  answer: string
  confidence: number
  reason: string
}>()
</script>

<template>
  <div class="flex items-start gap-3">
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
    >
      <font-awesome-icon :icon="['fas', 'robot']" class="text-xl" />
    </div>

    <div class="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3">
      <p class="text-sm font-bold text-gray-900">
        {{ answer }}
      </p>

      <p class="mt-2 text-xs text-gray-700">AI confidence: {{ confidence }}</p>

      <p class="mt-2 text-sm italic text-gray-700">
        {{ reason }}
      </p>
    </div>
  </div>
</template>
