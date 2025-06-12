const bunyan = require('bunyan')

const logger = bunyan.createLogger({
  name: 'book_store',
  serializers: {
    err: bunyan.stdSerializers.err
  }
})

module.exports = { logger }
