// Entrar com dois numeros reais e imprimir a media aritmética com a 
// mensagem media antes do resultado.
const num1 = parseFloat(prompt('Digite a 1ª nota: '))
const num2 = parseFloat(prompt('Digite a 2ª nota: '))

const average = (num1 + num2) / 2

alert(`O resultado da média: ${average.toFixed(2)}`)
