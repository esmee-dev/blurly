<script setup lang="ts">
const emit = defineEmits<{
  selected: [file: File]
}>()

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  const selectedFile = target.files?.item(0)

  if (!selectedFile) {
    return
  }

  emit('selected', selectedFile)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-center">
      <label
        for="image-upload"
        class="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-emerald-800 active:scale-95"
      >
        <font-awesome-icon :icon="['fas', 'upload']" />
        Choose image
      </label>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        class="hidden"
        @change="handleFileChange"
      />
    </div>
  </div>
</template>
