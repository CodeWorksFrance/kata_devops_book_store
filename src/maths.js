const factorial = (n) => {
    if (n < 0) {
        throw new Error('Cannot compute factorial for a negative number')
    }
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

const choice = (a, b) => {
    return factorial(a) / factorial(a - b)
}

module.exports = { choice }