<script setup lang="ts">
const props = defineProps<{
  modelValue: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const blurAmount = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between text-sm">
      <span class="font-medium text-gray-700"> Blur </span>

      <span class="text-gray-500"> {{ blurAmount }}% </span>
    </div>

    <input
      v-model.number="blurAmount"
      type="range"
      min="0"
      max="100"
      step="1"
      class="w-full accent-emerald-600"
    />
  </div>
</template>
