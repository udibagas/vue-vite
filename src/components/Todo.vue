<template>
  <form action="" @submit.prevent="handleForm">
    <!-- 2 way data binding -->
    <input type="text" placeholder="New todo" v-model="newTodo" />
    <button>Save</button>
    <!-- conditional rendering -->
    <p class="error" v-if="error">{{ error }}</p>
  </form>

  <ul>
    <!-- list rendering -->
    <li v-for="todo in todos">{{ todo }}</li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todos = ref(["Belajar HTML", "Belajar CSS", "Belajar JavaScript"]);
    const count = ref(0);
    const newTodo = ref("");
    const error = ref("");

    function increment() {
      count.value++;
      console.log(count.value);
    }

    function handleForm(event) {
      if (newTodo.value.length == 0) {
        error.value = "Todo harus diisi";
        return;
      }

      todos.value.push(newTodo.value);
      newTodo.value = "";
    }

    return { todos, count, newTodo, error, increment, handleForm };
  },
};
</script>
