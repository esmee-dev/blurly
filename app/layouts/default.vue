<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header
      class="sticky top-0 z-50 border-b border-emerald-700 bg-emerald-600 text-white"
    >
      <div
        class="mx-auto flex h-16 max-w-xl items-center justify-center gap-2 px-4 sm:px-6 lg:px-8"
      >
        <font-awesome-icon
          :icon="['fas', 'wand-magic-sparkles']"
          class="mt-1 text-lg"
        />

        <h1 class="text-2xl font-semibold">Blurly</h1>
      </div>
    </header>

    <main class="mx-auto max-w-3xl bg-white px-4 py-8">
      <slot />
    </main>
  </div>
</template>
