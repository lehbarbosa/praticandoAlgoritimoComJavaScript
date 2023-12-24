// Entrar com um número e imprimir o logaritmo desse número na base 10.

const num = parseFloat(prompt('Digite um logaritmando: '))

const resultado = Math.log(num) / Math.log(10)

alert(`O logariimo de ${num} = ${resultado.toFixed(2)}`)
