const express = require('express')

const app = express()

const { getBooks } = require('@codeworksfrance/catalog')
const indexHtml = require('./index.js')

app.get('/', (req, res) => {
  res.send(indexHtml)
})

app.get('/books', (req, res) => {
  const books = getBooks()
  res.send(books)
})

app.get('/crash', (req, res) => {
  const badId = 'no-such-id'
  const books = getBooks()
  const book = books[badId]
  res.send(book.title)
})

module.exports = app
