// This must be called firs.
const insights = require('./insights.js')
insights.start()

const app = require('./app.js')
const { getListeningPort } = require('./env.js')
const { logger } = require('./logs.js')

const port = getListeningPort()

app.use((err, req, res, next) => {
  logger.error(err)
  res.status(500).send('Internal Server Error')
})

logger.info('Starting the application')
app.listen(port, () => {
  logger.info(`Lstening on ${port}`)
})
