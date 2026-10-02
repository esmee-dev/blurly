<script setup lang="ts">
useHead({
  title: 'Blurly — AI Image Guesser',
})

definePageMeta({
  layout: 'default',
})

const {
  file,
  imageUrl,
  blurAmount,
  answer,
  loading,
  error,
  handleImageSelected,
  guessImage,
} = useImageGuess()

const isInfoOpen = ref(false)
</script>

<template>
  <div class="relative flex w-full flex-col gap-6">
    <div class="flex justify-end">
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
        title="How it works"
        @click="isInfoOpen = true"
      >
        <font-awesome-icon :icon="['fas', 'circle-info']" class="text-xl" />
      </button>
    </div>
    <image-preview :image-url="imageUrl" :blur-amount="blurAmount" />
    <div class="flex flex-col gap-4 rounded-xl p-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <image-picker @selected="handleImageSelected" :disabled="loading" />
        <file-info v-if="file" :file="file" />
      </div>

      <div v-if="file" class="pt-2 border-t border-gray-200/60">
        <blur-control v-model="blurAmount" :disabled="loading" />
      </div>

      <button
        v-if="file"
        type="button"
        :disabled="loading"
        class="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
        @click="guessImage"
      >
        <font-awesome-icon
          v-if="loading"
          :icon="['fas', 'spinner']"
          class="animate-spin"
        />
        <font-awesome-icon v-else :icon="['fas', 'robot']" />
        <span>{{ loading ? 'Analyzing image...' : 'Guess Image' }}</span>
      </button>
    </div>

    <p v-if="error" class="text-center text-sm font-medium text-red-500">
      {{ error }}
    </p>

    <guess-result
      v-if="loading || answer"
      :loading="loading"
      :answer="answer"
    />

    <info-modal :open="isInfoOpen" @close="isInfoOpen = false" />
  </div>
</template>
