<template>
  <ul>
    <li v-for="todo in todos">{{ todo }}</li>
  </ul>
</template>

<script setup>
defineProps(["todos"]);
</script>
