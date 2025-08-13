<template>
  <button
    :class="[
      'rounded-lg',
      'text-white',
      'px-4',
      'py-2',
      `bg-${color}`,
      'hover:bg-purple-600',
      'transition-colors',
      'duration-200',
      'shadow-md',
      'hover:shadow-lg',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-purple-500',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:bg-gray-400',
      'disabled:hover:bg-gray-400',
      'disabled:shadow-none',
      'disabled:transition-none',
      'disabled:duration-0',
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
