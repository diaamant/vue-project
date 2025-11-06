<script setup>
import { ref } from 'vue'
const name = ref('John')
const lastName = ref('Snow')

const count = ref(0)
</script>

<template>
  <p class="greeting">Hello, {{ name + ' ' + lastName }}!</p>

  <button v-on:click="count++">Add 1</button>
</template>

<style src="./App.css"></style>
