<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const file = ref<File | null>(null)
const imageUrl = ref<string | null>(null)
const blurAmount = ref(0)

const handleImageSelected = (selectedFile: File) => {
  file.value = selectedFile
  imageUrl.value = URL.createObjectURL(selectedFile)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <image-preview :image-url="imageUrl" :blur-amount="blurAmount" />

    <blur-control v-if="file" v-model="blurAmount" />

    <file-info v-if="file" :file="file" />

    <image-picker @selected="handleImageSelected" />
  </div>
</template>
