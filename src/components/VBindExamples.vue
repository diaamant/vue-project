<script setup>
import { ref } from 'vue'
const name = ref('John')
const lastName = ref('Snow')

const imageUrl = ref('test')

const isButtonDisabled = ref(false)
</script>

<template>
  <p class="greeting">
    Hello, {{ name + ' ' + lastName }}!
    {{ isButtonDisabled ? 'Yes' : 'No' }}
  </p>

  <img v-bind:src="`./img/${imageUrl}.jpg`" alt="" />

  <p>Button is {{ isButtonDisabled ? 'Disabled' : 'Enabled' }}</p>
  <button :disabled="isButtonDisabled">Кнопка</button>
</template>

<style src="./App.css"></style>
