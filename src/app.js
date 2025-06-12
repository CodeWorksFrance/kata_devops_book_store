const express = require('express')

const app = express()

const { getBooks } = require('@codeworksfrance/catalog')
const indexHtml = require('./index.js')
const { logger } = require('./logs.js')

// Note : must be first
app.use((req, res, next) => {
  const { method, originalUrl } = req
  logger.info(
    {
      method,
      originalUrl
    },
    'Got request'
  )

  res.on('finish', () => {
    const { statusCode } = res
    logger.info(
      {
        method,
        originalUrl,
        statusCode
      },
      'Response sent' )
  })

  next()
})

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

// Note : must be last
app.use((err, req, res, next) => {
  logger.error(err)
  res.status(500).send('Internal Server Error')
})

module.exports = app
