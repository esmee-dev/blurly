<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-100 text-gray-900">
    <header
      class="sticky top-0 z-50 border-b border-emerald-700 bg-emerald-600 text-white shadow-sm"
    >
      <div
        class="mx-auto flex h-16 max-w-xl items-center justify-center gap-2 px-4 sm:px-6 lg:px-8"
      >
        <font-awesome-icon
          :icon="['fas', 'wand-magic-sparkles']"
          class="text-lg"
        />
        <h1 class="text-2xl font-semibold">Blurly</h1>
      </div>
    </header>

    <main class="mx-auto w-full max-w-3xl flex-1 p-4 sm:p-6">
      <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
        <slot />
      </div>
    </main>
  </div>
</template>
