<template>
  <div class="flex items-center justify-center h-full">
    <div>
      <Statistic :todos="todos" />
      <TodoForm @save-todo="handleSaveTodo" />
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";
import Statistic from "./Statistic.vue";

const todos = ref([
  { id: 1, task: "Belajar HTML", completed: true },
  { id: 2, task: "Belajar CSS", completed: true },
  { id: 3, task: "Belajar JavaScript", completed: false },
]);

function handleSaveTodo(newTodo) {
  todos.value.push(newTodo);
  console.table(todos.value);
}
</script>
