<template>
  <button
    :class="[
      'rounded-lg',
      'text-white',
      'px-4',
      'py-2',
      `bg-${color}`,
      'hover:bg-purple-600',
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: false,
    default: "purple-500",
  },
});
</script>
