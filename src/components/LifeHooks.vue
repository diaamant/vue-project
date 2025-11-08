<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
const name = ref('John')
const lastName = ref('Snow')

const count = ref(0)

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})
</script>

<template>
  <p class="greeting">Hello, {{ name + ' ' + lastName }}!</p>

  <button v-on:click="count++">Add 1</button>
  <p>Счетчик: {{ count }}</p>
</template>

<style src="./App.css"></style>
