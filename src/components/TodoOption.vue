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
};
</script>
