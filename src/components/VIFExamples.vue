<script setup>
import { computed, reactive, ref } from 'vue'

import { books as initialBooks } from '@/data/books.js'

const books = reactive(initialBooks)
const isShow = ref(true)

const countOfLowPriceBooks = computed(() => {
  const filterBooks = books.filter((book_) => book_.price < 500)
  return filterBooks.length
})

const booksFilteredByVotes = computed(() => {
  const bookCopy = [...books]
  return bookCopy.sort((a, b) => b.votes - a.votes)
})

function onVoteBtnClick(book, like, event) {
  console.log(event)
  console.log(like)
  book.isVoted = like
  if (!like) {
    book.votes -= 1
    return
  }
  book.votes += 1
}
</script>

<template>
  <ul>
    <li v-for="book in booksFilteredByVotes" :key="book.id">
      <div v-for="(value, key, index) in book" :key="`${book.id}-${value}`">
        {{ index }}: {{ key }}: {{ value }}
      </div>
      <button v-if="!book.isVoted" @click="onVoteBtnClick(book, true, $event)">
        👍 Проголосовать
      </button>
      <button v-else disabled>Вы проголосовали</button>
      <button v-if="book.isVoted" @click="onVoteBtnClick(book, false, $event)">
        👎 Не нравится
      </button>
      <br />
    </li>
  </ul>
  <p>Кол-во книг с низкой ценой: {{ countOfLowPriceBooks }}</p>

  <br />
  <template v-if="true">
    <h3>v-if Template</h3>
    <p>Демонстрация</p>
  </template>

  <br />
  <button @click="isShow = !isShow">Show</button>
  <p v-show="isShow">{{ isShow }}</p>
</template>

<style src="./App.css"></style>
