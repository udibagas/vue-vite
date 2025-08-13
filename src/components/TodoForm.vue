<template>
  <form action="" @submit.prevent="handleForm" class="my-8 flex gap-4">
    <!-- 2 way data binding -->
    <input
      type="text"
      placeholder="New todo"
      v-model="newTodo.task"
      class="border border-gray-500 rounded-lg px-4 py-2 w-full"
    />
    <Button :disabled="!newTodo.task || newTodo.task.length < 5">Simpan</Button>
    <!-- conditional rendering -->
  </form>
  <div class="bg-red-50 text-red-500 rounded-lg mb-8 p-4" v-if="error">
    {{ error }}
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const error = ref("");
const newTodo = reactive({ id: Date.now(), task: "", completed: false });
const emit = defineEmits(["saveTodo"]);

watch(
  () => newTodo.task, // source (state yg di watch, bisa berupa ref atau reactive)
  // fungsi yang dijalankan ketika state berubah
  (v) => {
    if (v && v.length < 5) {
      error.value = "Task harus >= 5 karakter";
    } else {
      error.value = "";
    }
  }
);

function handleForm(event) {
  if (newTodo.task.length < 5) {
    return;
  }

  emit("saveTodo", { ...newTodo, id: Date.now() });
  newTodo.task = "";
  error.value = "";
}
</script>
