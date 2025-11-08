<template>
  <button>{{ text }} {{ number }}</button>
</template>

<script setup>
import { computed, ref } from 'vue'

// const props = defineProps(['text', 'number'])
const props = defineProps({
  text: {
    type: String,
    default: 'Значение по умолчанию',
    validator: (value) => {
      return ['Тестовое значение', 'Добавить', 'Удалить'].includes(value)
    },
  },
  number: {
    type: Number,
    required: true,
  },
})

console.log(props)

const newNumber = ref(props.number)
console.log(newNumber)

const FixdNumber = computed(() => props.number.toFixed(5))
console.log(FixdNumber)
</script>
