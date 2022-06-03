
const sum = (a, b) => {
    return a + b
}

const inOneHour = () => {
    const now = Date.now()
    const oneHoureInMili = 1 * 60 * 60 * 1000
    return now + oneHoureInMili
}

module.exports = {sum, inOneHour}