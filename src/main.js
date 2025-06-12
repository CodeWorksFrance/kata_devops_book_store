const insights = require('./insights.js')
insights.start()

const app = require('./app.js')
const { getListeningPort } = require('./env.js')

const port = getListeningPort()

app.listen(port, () => {
  console.log(`App is listening at ${port}`)
})
