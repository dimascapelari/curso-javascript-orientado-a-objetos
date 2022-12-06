function nome() {
    console.log('Dimas')
}
nome()


function nomeSobrenome() {
    return 'Dimas Capelari'
}

var recebeNome = nomeSobrenome()
console.log(recebeNome)

var teste = (typeof nomeSobrenome)
if (teste === 'function') {
    var recebeNome = nomeSobrenome()
} else {
    console.log('nomeSobrenome não é uma função')
}
console.log(recebeNome)



function showSobreNome() {
    return 'Capelari'
}
if (showSobreNome instanceof Function) {
    var sobrenome = showSobreNome()
}
console.log(sobrenome)






var carros = ['gol', 'uno', 'corolla']

if (carros instanceof Array) {
    console.log(carros)
}


var auto = new Array('gol', 'uno', 'corolla')

if (auto instanceof Array) {
    console.log(auto)
} else {
    console.log(typeof auto)
}


if (Array.isArray(carros)) {
    console.log(carros)
}