<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <a href="">Beranda</a>
      <a href="">Kontak</a>
      <a href="">Profil</a>
    </nav>
  </header>
</template>
