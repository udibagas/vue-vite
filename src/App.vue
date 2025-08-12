<script setup>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import TodoComposition from "./components/TodoComposition.vue";
</script>

<template>
  <Header title="Todo Apps" />
  <section style="display: flex">
    <Sidebar />
    <main>
      <TodoComposition />
    </main>
  </section>
</template>
