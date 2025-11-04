<script setup>
import { ref, reactive, computed } from 'vue'

const imageUrl = ref('test')

const isButtonDisabled = ref(false)

const user = reactive({
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 30,
})

const fullName = computed(() => user.firstName + ' ' + user.lastName)
</script>

<template>
  <p class="greeting">
    Hello, {{ fullName }}!
    {{ isButtonDisabled ? 'Yes' : 'No' }}
  </p>

  <img v-bind:src="`./img/${imageUrl}.jpg`" alt="" />

  <p>Button is {{ isButtonDisabled ? 'Disabled' : 'Enabled' }}</p>
  <button :disabled="isButtonDisabled">Кнопка</button>
</template>

<style src="./App.css"></style>
