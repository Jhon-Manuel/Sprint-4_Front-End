let pets = [{
    nome: "Doguinho A",
    idade: 4,
    tipoPet: "cachorro"
}, {
    nome: "Doguinho B",
    idade: 5,
    tipoPet: "cachorro"
}, {
    nome: "Doguinho C",
    idade: 11,
    tipoPet: "cachorro"
}, {
    nome: "Gatinho A",
    idade: 17,
    tipoPet: "gato"
}, {
    nome: "Gatinho H",
    idade: 2,
    tipoPet: "gato"
}, {
    nome: "Passarinho A",
    idade: 12,
    tipoPet: "pássaro"
}, {
    nome: "Doguinho Z",
    idade: 16,
    tipoPet: "cachorro"
}, {
    nome: "Doguinho H",
    idade: 4,
    tipoPet: "cachorro"
}, {
    nome: "Gatinho P",
    idade: 3,
    tipoPet: "gato"
}];

// 1.	Liste somente os animais cujo tipo seja igual a gato;
//
console.log(pets.filter((p) => p.tipoPet === "gato"))


// 2.	Liste somente os animais cuja idade seja superior a 7;
//
console.log(pets.filter((p) => p.idade > 7))


// 3.	Some a idade de todos os pets;
//
console.log(pets.reduce((a,b) => a + b.idade ,0))


// 4.	Traga somente os nomes dos pets;
//
console.log(pets.map((p) => p.nome))


// 5.	Adicione mais um pet chamado doguinho, cuja idade é igual a 13 e o tipo seja cachorro;
//
var novoPet = {
    nome: "doguinho",
    idade: 13,
    tipoPet: "cachorro"
}

pets.push(novoPet)

console.log(pets)


// 6. Mostre a quantidade de cachorros que possuem na lista
//
