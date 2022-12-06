
// TIPOS PRIMITIVOS
var valor = 18
var sexo = 'f'
var nome = undefined
var exist = true
var endereco = null
var meuNome = 'Dimas'

var primeiroChar = meuNome.charAt(0)
console.log(primeiroChar)

var nomeMaiusculo = meuNome.toUpperCase()
console.log(nomeMaiusculo)

console.log(valor.toFixed(2))


console.log(typeof valor)
console.log(!! valor)
console.log(typeof sexo)
console.log(typeof nome)
console.log(typeof exist)
console.log(typeof endereco)
console.log(endereco === null)

// TIPOS DE REFERÊNCIA
var pessoa = new Object()
console.log(typeof pessoa)

var pessoa2 = {nome: 'Dimas', idade: '40', sexo: 'M'}
console.log(pessoa2)

var mostraNome = new Function(console.log('Dimas'))
mostraNome()

var carro = new Array('Agile', 'Cruze', 'Opala')
console.log(carro)

var carros = ['Agile', 'Cruze', 'Opala']
console.log(carros)

function mostraIdade(){
    console.log('Idade é igual ' + 40)
}
mostraIdade()