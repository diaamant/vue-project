<script setup>
import { computed, reactive } from 'vue'

const books = reactive([
  {
    id: 101,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 599,
    votes: 27,
  },
  {
    id: 102,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    price: 649,
    votes: 34,
  },
  {
    id: 103,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 499,
    votes: 19,
  },
  {
    id: 104,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 399,
    votes: 22,
  },
  {
    id: 105,
    title: 'Refactoring',
    author: 'Martin Fowler',
    price: 699,
    votes: 41,
  },
  {
    id: 106,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    price: 799,
    votes: 37,
  },
  {
    id: 107,
    title: 'Effective JavaScript',
    author: 'David Herman',
    price: 549,
    votes: 25,
  },
])

const countOfLowPriceBooks = computed(() => {
  const filterBooks = books.filter((book_) => book_.price < 500)
  return filterBooks.length
})
</script>

<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <div v-for="(value, key, index) in book" :key="`${book.id}-${value}`">
        {{ index }}: {{ key }}: {{ value }}
      </div>
      <br />
    </li>
  </ul>
  <p>Кол-во книг с низкой ценой: {{ countOfLowPriceBooks }}</p>
</template>

<style src="./App.css"></style>
