<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <header class="bg-purple-500 flex justify-between h-[60px] items-center px-6">
    <h1 class="text-white text-2xl">{{ title }}</h1>
    <nav class="flex gap-4 text-white">
      <router-link to="/">Beranda</router-link>
      <router-link to="/contact">Kontak</router-link>
      <router-link to="/profile">Profil</router-link>
    </nav>
  </header>
</template>
