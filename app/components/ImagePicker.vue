<script setup lang="ts">
interface Props {
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  disabled: false,
})

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
        class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-sm transition"
        :class="{
          'cursor-pointer hover:bg-emerald-800 active:scale-95': !disabled,
          'cursor-not-allowed opacity-50': disabled,
        }"
      >
        <font-awesome-icon :icon="['fas', 'upload']" />
        Choose image
      </label>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        class="hidden"
        :disabled="disabled"
        @change="handleFileChange"
      />
    </div>
  </div>
</template>
