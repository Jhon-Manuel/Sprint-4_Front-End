let personagens = [{
    nome: "Capitão Cometa",
    dataAparicao: 1951,
    editora: "DC"
}, {
    nome: "Lanterna Verde",
    dataAparicao: 1940,
    editora: "DC"
}, {
    nome: "Ciborgue",
    dataAparicao: 1980,
    editora: "DC"
}, {
    nome: "Homem Aranha",
    dataAparicao: 1962,
    editora: "Marvel"
}, {
    nome: "Homem de Ferro",
    dataAparicao: 1963,
    editora: "Marvel"
}, {
    nome: "Capitão América",
    dataAparicao: 1940,
    editora: "Marvel"
}];

const quantPersonagensMarvel = personagens.map((p) => {
    
    var a = 0
    if (p.editora === "Marvel") {
       var b = a + 1
        return b
    }
})

console.log(quantPersonagensMarvel)