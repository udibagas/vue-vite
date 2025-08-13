<template>
  <div
    :class="[
      'w-48',
      'text-center',
      'rounded-lg',
      'border',
      `border-${color}`,
      'border-r-4',
      'border-b-4',
      'p-4',
      'shadow',
      'hover:-translate-y-1',
    ]"
  >
    <div :class="['text-3xl', `text-${color}`]">{{ value }}</div>
    <span class="text-sm text-gray-500">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: Number,
  color: {
    type: String,
    default: "purple-500",
  },
});
</script>
