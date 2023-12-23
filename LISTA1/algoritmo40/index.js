// Entrar com dois numeros inteiros e imprimir a seguinte saída:
// dividendo
// divisor:
// quociente:
// resto 
const dividendo = parseInt(prompt('Entre com o dividendo:  '))
const divisor = parseInt(prompt('Entre com o divisor: '))

const quociente = dividendo / divisor
const resto = dividendo % divisor

alert(`Dividendo: ${dividendo}
Divisor: ${divisor}
Quociente: ${quociente.toFixed(2)}
Resto: ${resto}`)
