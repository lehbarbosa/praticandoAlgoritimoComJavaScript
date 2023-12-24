// Entrar com um ângulo em graus e imprimir: seno, co-seno, tangente deste ângulo.

const angulo = parseFloat(prompt('Digite um ângulo em graus: '))

const result = angulo * Math.PI / 180

alert(`O seno do ângulo ${angulo}° = ${Math.sin(result).toFixed(2)}
O coseno do ângulo ${angulo}° = ${Math.cos(result).toFixed(2)}
O tangente do ângulo ${angulo}° = ${Math.tan(result).toFixed(2)}`)
