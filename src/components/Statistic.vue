<template>
  <div class="flex justify-between gap-4 flex-wrap">
    <StatBox label="Total Task" :value="todos.length" />
    <StatBox label="Completed" :value="completedTask" color="green-500" />
    <StatBox label="Pending" :value="pendingTask" color="red-500" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import StatBox from "./StatBox.vue";

const { todos } = defineProps(["todos"]);

const completedTask = computed(() => todos.filter((t) => t.completed).length);
const pendingTask = computed(() => todos.filter((t) => !t.completed).length);
</script>
