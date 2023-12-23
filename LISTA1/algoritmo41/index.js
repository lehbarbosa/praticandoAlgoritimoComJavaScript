// Entrar com quatro números e imprimir a média ponderada, sabendo-se que os
// pesos são respectivamente: 1, 2, 3 e 4.

alert(`Bem-vindo ao sistema de nota poderada!`)
const num  = Number(prompt('Digite a 1ª nota: '))
const num2 = Number(prompt('Digite a 2ª nota: '))
const num3 = Number(prompt('Digite a 3ª nota: '))
const num4 = Number(prompt('Digite a 4ª nota: '))

const media = (1 * num + 2 * num2 + 3 * num3 + 4 * num4) / 10

alert(`A média ponderada: ${media}`)