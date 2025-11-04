<script setup>
import { ref, reactive } from 'vue'
const name = ref('World')
name.value = 'Vue 3'

const reactiveArray = reactive([1, 2, 3])
reactiveArray.push(4)

const refArray = ref([4, 5, 6])
refArray.value.push(7)

const reactiveUser = reactive({
  user: {
    firstName: 'Alice',
    age: 30,
  },
})
reactiveUser.user.age += 1

const refUser = ref({
  user: {
    firstName: 'Eve',
    age: 30,
  },
})
refUser.value.user.age += 1
</script>

<template>
  <p class="greeting">Hello, {{ name }}!</p>
</template>

<style src="./App.css"></style>
