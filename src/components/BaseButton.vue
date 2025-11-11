<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>{{ count }}</p>
  <button v-on:click="count++">Add 1</button>
</template>
