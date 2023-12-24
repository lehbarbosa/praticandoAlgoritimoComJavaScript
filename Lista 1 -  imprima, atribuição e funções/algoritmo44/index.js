// Entrar com o número e a base em que se deseja calcular o logaritmo desse número
// e imprimi-lo.

const numero = Number(prompt('Entre com um número: '))
const base = Number(prompt('Entre com a base: '))

const resultado = Math.log(numero) / Math.log(base)

alert(`O logaritmo do número  ${numero} na base ${base} é => ${resultado}`)
