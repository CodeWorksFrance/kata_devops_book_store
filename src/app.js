const express = require('express')
const { getBooks } = require('@codeworksfrance/catalog')

const app = express()

const indexHtml = require('./index.js')
const { choice } = require('./maths.js')

app.get('/', (req, res) => {
  res.send(indexHtml)
})

app.get('/books', (req, res) => {
  res.send(getBooks())
})

app.get('/crash', (req, res) => {
  const result = choice(2, 4)
  res.send(result.toString(10))
})

module.exports = app
