const test = require('../TestController')

it('1 + 2 deve ser igual a 3', () => {
    const result = 3

    expect(test.soma(1,2)).toBe(result)
})

it('4 / 2 deve ser igual a 2', () => {
    const result = 2

    expect(test.divisao(4,2)).toBe(result)
})

it('1 * 2 deve ser igual a 2', () => {
    const result = 2

    expect(test.multiplicacao(1,2)).toBe(result)
})