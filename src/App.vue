<script setup>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import TodoComposition from "./components/TodoComposition.vue";
</script>

<template>
  <!-- child component -->
  <Header title="Todo Apps" />
  <section style="display: flex">
    <!-- child component -->
    <Sidebar />
    <main class="p-8 m-8 border border-gray-300 flex-1 rounded-xl shadow-lg">
      <!-- child component -->
      <TodoComposition />
    </main>
  </section>
</template>
