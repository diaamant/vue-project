<script setup>
import { ref } from 'vue'
import BaseLayout from './components/BaseLayout.vue'
import BaseButton from './components/BaseButton.vue'
const name = ref('John')
const lastName = ref('Snow')
</script>

<template>
  <p class="greeting">Hello, {{ name + ' ' + lastName }}!</p>
  <BaseLayout>
    <template #header>
      <h1>Welcome to My App</h1>
    </template>
    <template #main>
      <p>This is the main content area.</p>
      <BaseButton />
    </template>
    <template #footer>
      <p>© 2024 My App</p>
    </template>
  </BaseLayout>
  <hr />
</template>

<style src="./App.css"></style>
