<template>
  <div class="flex items-center justify-center h-full">
    <div>
      <div class="flex justify-between">
        <div class="rounded-lg border border-gray-300 p-4 shadow">
          Total Task
          <div class="text-3xl text-purple-500">{{ todos.length }}</div>
        </div>

        <div class="rounded-lg border border-gray-300 p-4 shadow">
          Completed
          <div class="text-3xl text-green-500">
            {{ completedTask }}
          </div>
        </div>

        <div class="rounded-lg border border-gray-300 p-4 shadow">
          Pending
          <div class="text-3xl text-red-500">
            {{ pendingTask }}
          </div>
        </div>
      </div>
      <TodoForm @save-todo="handleSaveTodo" />
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";

const todos = ref([
  { id: 1, task: "Belajar HTML", completed: true },
  { id: 2, task: "Belajar CSS", completed: true },
  { id: 3, task: "Belajar JavaScript", completed: false },
]);

const completedTask = computed(
  () => todos.value.filter((t) => t.completed).length
);

const pendingTask = computed(
  () => todos.value.filter((t) => !t.completed).length
);

function handleSaveTodo(newTodo) {
  todos.value.push(newTodo);
  console.table(todos.value);
}

function getPendingTask() {
  return todos.value.filter((t) => !t.completed).length;
}
</script>
