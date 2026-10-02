<script setup lang="ts">
const props = defineProps<{
  imageUrl: string | null
  blurAmount: number
}>()

const blurPixels = computed(() => {
  return (props.blurAmount / 100) * 20
})
</script>

<template>
  <div
    class="flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Selected image"
      class="h-full w-full object-contain"
      :style="{ filter: `blur(${blurPixels}px)` }"
    />

    <div v-else class="w-64 text-center text-gray-400">
      <font-awesome-icon :icon="['fas', 'image']" class="mb-2 text-3xl" />

      <p>No image selected</p>
    </div>
  </div>
</template>
