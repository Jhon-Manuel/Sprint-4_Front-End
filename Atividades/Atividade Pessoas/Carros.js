// Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe um único parâmetro como argumento. Essa função deve retornar `true` se o equivalente booleano para o valor passado no argumento for `true`, ou `false` para o contrário.
const isTruthy = argumento => !!argumento 

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(0))
console.log(isTruthy(NaN))
console.log(isTruthy(''))

//Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
console.log(isTruthy(true))
console.log(isTruthy({}))
console.log(isTruthy([]))
console.log(isTruthy(42))
console.log(isTruthy("foo"))
console.log(isTruthy(new Date()))
console.log(isTruthy(3.14))
console.log(isTruthy(-3.14))
console.log(isTruthy(Infinity))
console.log(isTruthy(-Infinity))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object()
carro.marca = ''
carro.modelo = ''
carro.placa = ''
carro.ano = 0
carro.cor = ''
carro.quantasPortas = 0
carro.