<script setup lang="ts">
defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-100 flex items-center justify-center bg-black/40 px-4"
      @click.self="emit('close')"
    >
      <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div class="mb-4 flex items-start justify-between">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">About Blurly</h2>

            <p class="mt-1 text-sm text-gray-500">
              Guess what's hiding in the blur.
            </p>
          </div>

          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close information"
            @click="emit('close')"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </div>

        <div class="space-y-4 text-sm leading-6 text-gray-700">
          <p>
            Blurly lets you upload an image, blur it, and then asks an AI model
            to guess what is shown.
          </p>

          <div class="rounded-lg bg-emerald-50 p-4">
            <div
              class="mb-1 flex items-center gap-2 font-medium text-emerald-700"
            >
              <font-awesome-icon :icon="['fas', 'wand-magic-sparkles']" />
              How it works
            </div>

            <p>
              Choose an image, adjust the blur, and let the AI make its guess.
              If the image is too blurry to recognize, adjust the blur and try
              again.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
