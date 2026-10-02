<script setup lang="ts">
defineProps<{
  answer: string
  loading: boolean
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
      <div v-if="loading" class="flex items-center gap-2">
        <font-awesome-icon
          :icon="['fas', 'spinner']"
          class="animate-spin text-emerald-600"
        />
        <span class="text-sm text-gray-600">AI is thinking...</span>
      </div>

      <p v-else-if="answer" class="text-sm text-gray-800">
        {{ answer }}
      </p>
    </div>
  </div>
</template>
