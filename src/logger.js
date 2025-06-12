const winston = require('winston')

const levels = {
  Verbose: 4,
  Information: 3,
  Warning: 2,
  Error: 1,
  Critical: 0,
}

const level = () => {
  return levels.Verbose
}



const format = winston.format.combine(
  winston.format.errors({ stack: true }),
  winston.format.json()
)


const transports = [
  new winston.transports.Console(),
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})

module.exports = Logger