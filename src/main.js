// This must be called firs.
const insights = require('./insights.js')
insights.start()

const app = require('./app.js')
const { getListeningPort } = require('./env.js')
const { logger } = require('./logs.js')

const port = getListeningPort()

logger.info('Starting the application')
app.listen(port, () => {
  logger.info(`Lstening on ${port}`)
})
