const appInsights = require('applicationinsights')
const APP_INSIGHTS_CONNECTION_STRING = 'InstrumentationKey=5a5a7d93-47f6-4655-93be-e3870f5f6d6f;IngestionEndpoint=https://francecentral-1.in.applicationinsights.azure.com/;LiveEndpoint=https://francecentral.livediagnostics.monitor.azure.com/;ApplicationId=87ccec3a-775c-4469-8dc0-c0fbb3afcfef'

appInsights.setup(APP_INSIGHTS_CONNECTION_STRING)
  .setAutoCollectConsole(true, true)

module.exports = appInsights
