<script setup lang="ts">
defineProps<{
  file: File
}>()
</script>

<template>
  <div
    class="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm"
  >
    <font-awesome-icon
      :icon="['fas', 'file-image']"
      class="text-xl text-emerald-500"
    />

    <div class="min-w-0">
      <p class="truncate text-sm font-medium text-gray-800">
        {{ file.name }}
      </p>

      <p class="text-xs text-gray-500">
        {{ (file.size / 1024 / 1024).toFixed(2) }} MB
      </p>
    </div>
  </div>
</template>
