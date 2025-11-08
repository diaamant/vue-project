<script setup>
import { ref } from 'vue'

const name = ref('John')
const lastName = ref('Snow')
</script>

<template>
  <p class="greeting">Hello, {{ name + ' ' + lastName }}!</p>

  <div>
    <PropsButton text="Добавить" :number="1" />
  </div>

  <br />

  <div>
    <PropsButton :number="2" />
  </div>
</template>

<style src="./App.css"></style>
