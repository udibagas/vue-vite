<template>
  <ul class="flex flex-col gap-4">
    <li
      v-for="todo in todos"
      :class="[
        'bg-purple-50',
        'p-4',
        'rounded-lg',
        'hover:bg-purple-100',
        { 'line-through': todo.completed },
      ]"
    >
      {{ todo.task }}
    </li>
  </ul>
</template>

<script setup>
defineProps(["todos"]);
</script>
