<script setup>
import { ref } from 'vue'
const name = ref('John')
const lastName = ref('Snow')
</script>

<template>
  <p class="greeting">Hello, {{ name + ' ' + lastName }}!</p>
</template>

<style src="./App.css"></style>
