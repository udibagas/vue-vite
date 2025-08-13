<template>
  <div class="flex justify-between gap-4">
    <div class="w-[200px] rounded-lg border border-gray-300 p-4 shadow">
      Total Task
      <div class="text-3xl text-purple-500">{{ todos.length }}</div>
    </div>

    <div class="w-[200px] rounded-lg border border-gray-300 p-4 shadow">
      Completed
      <div class="text-3xl text-green-500">
        {{ completedTask }}
      </div>
    </div>

    <div class="w-[200px] rounded-lg border border-gray-300 p-4 shadow">
      Pending
      <div class="text-3xl text-red-500">
        {{ pendingTask }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { todos } = defineProps(["todos"]);

const completedTask = computed(() => todos.filter((t) => t.completed).length);
const pendingTask = computed(() => todos.filter((t) => !t.completed).length);
</script>
