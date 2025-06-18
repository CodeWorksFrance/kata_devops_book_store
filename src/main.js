const appInsights = require('applicationinsights');
appInsights.setup("InstrumentationKey=3f755261-82c7-4c44-a2af-d80bc59f9c40;IngestionEndpoint=https://francecentral-1.in.applicationinsights.azure.com/;LiveEndpoint=https://francecentral.livediagnostics.monitor.azure.com/;ApplicationId=efa02eb3-9a84-428e-b3a6-8e781d69a913").setAutoCollectConsole(true,true)
appInsights.start();

const app = require('./app.js')
const { getListeningPort } = require('./env.js');
const logger = require('./logger.js');

const port = getListeningPort()

logger.info('Starting the application')
app.listen(port, () => {
  logger.info(`Listening on ${port}`)
})
