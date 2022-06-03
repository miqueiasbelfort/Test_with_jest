const {sum, inOneHour} = require("./my-code")

describe("Math functions", () => {

    it("sums 2 numbers", () => {
        expect(sum(1,2)).toBe(3)
    })

})

describe("Time functions", () => {

    it("returns the timestamp for noe hour ahead", () => {
        const realDateNow = Date.now.bind(global.Date) // Cria uma nova função do que passar
        
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(60 * 60 * 1000)
        
        global.Date.now = realDateNow
    }) 

})

