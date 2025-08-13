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

<script>
import TodoList from "./TodoList.vue";

// options api
export default {
  data() {
    return {
      todos: ["Belajar HTML", "Belajar CSS", "Belajar JavaScript"],
      newTodo: "",
      error: "",
      count: 0,
    };
  },

  methods: {
    handleForm(event) {
      if (this.newTodo.length == 0) {
        this.error = "Todo harus diisi";
        return;
      }
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
  },

  components: {
    TodoList,
  },
};
</script>
