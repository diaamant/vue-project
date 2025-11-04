<script setup>
import { ref, computed } from 'vue'
const name = ref('John')
const lastName = ref('Snow')

const isGreeting = ref(true)
// isGreeting.value = false

const isActive = ref(true)
// isActive.value = false

const isError = ref(false)
isError.value = true

const classObj = computed(() => ({
  'message--active': isActive.value,
  'message--error': isError.value,
}))
</script>

<template>
  <p :class="{ greeting: isGreeting }">Hello, {{ name + ' ' + lastName }}!</p>
  <div class="message" :class="{ 'message--active': isActive, 'message--error': isError }">
    Сообщение от сервера
  </div>

  <br />

  <div class="message" :class="classObj">Сообщение от сервера</div>

  <br />

  <div class="[isActive ? 'message--active' : '', message]">Сообщение от сервера</div>
</template>

<style src="./App.css"></style>
