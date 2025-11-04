<script setup>
import { reactive, ref } from 'vue'

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
  <div class="reactive-examples">
    <h2>Reactive Examples</h2>
    <div>
      <h3>Arrays:</h3>
      <p>Reactive Array: {{ reactiveArray }}</p>
      <p>Ref Array: {{ refArray }}</p>
    </div>
    <div>
      <h3>Objects:</h3>
      <p>Reactive User: {{ reactiveUser.user }}</p>
      <p>Ref User: {{ refUser.user }}</p>
    </div>
  </div>
</template>
