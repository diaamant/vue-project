<script setup>
import { ref } from 'vue'
const name = ref('John')
const lastName = ref('Snow')

const count = ref(0)

function increaseCount() {
  count.value++
}

function decreaseCount(event) {
  count.value--
  console.log(event)
}
</script>

<template>
  <p class="greeting">Hello, {{ name + ' ' + lastName }}!</p>

  <button v-on:click="increaseCount">Add 1</button>

  <button @click="decreaseCount">Decrease 1</button>

  <p>Счетчик: {{ count }}</p>
</template>

<style src="./App.css"></style>
