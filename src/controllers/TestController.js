const soma = (nota1, nota2) => {
    let soma = nota1 + nota2

    return soma
}

const divisao = (nota1, nota2) => {
    let divisao = nota1 / nota2

    return divisao
}

const multiplicacao = (nota1, nota2) => {
    let multiplicacao = nota1 * nota2

    return multiplicacao
}

const subtracao = (nota1, nota2) => {
    let subtracao = nota1 - nota2

    return subtracao
}

module.exports = {
    soma,
    divisao,
    multiplicacao,
    subtracao
}