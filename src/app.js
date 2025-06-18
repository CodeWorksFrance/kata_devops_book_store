const express = require('express')
const { getBooks } = require('@codeworksfrance/catalog')

const app = express()

const indexHtml = require('./index.js')
const { choice } = require('./maths.js')
const logger = require('./logger.js')

app.use((req, res, next) => {
  const { method, originalUrl } = req
  logger.info(
    {
      method,
      originalUrl
    },
    'Got request'
  )
  next()
})

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

app.use((err, req, res, next) => {
  logger.error(err)
  res.status(500).send('Internal server error')
})

module.exports = app
