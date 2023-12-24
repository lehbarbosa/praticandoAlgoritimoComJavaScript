// Ler um número inteiro e imprimir seu sucessor e seu antecessor.
const numero = parseInt(prompt('Digite um número: '))

const antecessor = numero - 1
const sucessor = numero + 1

alert(`O sucessor de ${numero} é =>  ${sucessor}\nO antecessor de ${numero} é =>  ${antecessor}`)
