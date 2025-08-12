<template>
  <form action="" @submit.prevent="handleForm">
    <!-- 2 way data binding -->
    <input type="text" placeholder="New todo" v-model="newTodo" />
    <button>Save</button>
    <!-- conditional rendering -->
    <p class="error" v-if="error">{{ error }}</p>
  </form>

  <TodoList :todos="todos" />
</template>

<script setup>
import { ref } from "vue";
import TodoList from "./TodoList.vue";

const todos = ref(["Belajar HTML", "Belajar CSS", "Belajar JavaScript"]);
const newTodo = ref("");
const error = ref("");

function handleForm(event) {
  if (newTodo.value.length == 0) {
    error.value = "Todo harus diisi";
    return;
  }

  todos.value.push(newTodo.value);
  newTodo.value = "";
}
</script>
