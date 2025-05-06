const parsePort = (value) => {
  if (value === undefined) {
    return 3000
  }
  const port = parseInt(value, 10)

  if (isNaN(port)) {
    throw new Error(`${value} should be a valid number`)
  }

  if (port <= 0) {
    throw new Error(`${value} should be a positive number`)
  }

  return port
}

const getListeningPort = () => {
  const port = parsePort(process.env.PORT)
  return port
}

module.exports = {
  getListeningPort
}
