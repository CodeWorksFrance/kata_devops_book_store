const app = require('./app.js')
const { getListeningPort } = require('./env.js')

const port = getListeningPort()

console.log('Starting the application')
app.listen(port, () => {
  console.log(`Lstening on ${port}`)
})
