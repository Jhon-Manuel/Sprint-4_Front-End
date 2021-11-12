// Variavel qualquer com objeto vazio
var nula = null;

// Declara uma variaval 'pessoa', que recebe suas informações pessoais
var pessoa = new Object();

pessoa.nome = '';
pessoa.sobrenome = '';
pessoa.sexo = '';
pessoa.idade = 0;
pessoa.altura = 0;
pessoa.peso =0;
pessoa.andando =false;
pessoa.caminhouQuantosMetros =0;

// Adiciona um método ao objeto 'pessoa' chamado 'fazerAniversario'
pessoa.fazerAniversario = function () {
    pessoa.idade ++ ;
}
pessoa.fazerAniversario();


// Adiciona um método ao objeto 'pessoa' chamado 'andar', que terá as seguintes características:
//- Esse método deve receber por parâmetro um valor que representará a quantidade
//de metros caminhados;
//- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
//valor dessa propriedade a quantidade passada por parâmetro;
//- Ele deverá modificar o valor da propriedade `andando` para o valor
//booleano que representa "verdadeiro";
pessoa.andar = function (caminhou) {
    pessoa.caminhouQuantosMetros += caminhou;
    pessoa.andando = true;
}
pessoa.andar();

// Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
//da propriedade `andando` para o valor booleano que representa "falso".
pessoa.parar = function () {
    pessoa.andando =false;
}
pessoa.andando();

// Crie um método chamado `nomeCompleto`, que retorne a frase:
//- "Olá! Meu nome é [NOME] [SOBRENOME]!"
function nomeCompleto(nome,sobrenome) {
    return "Olá!, meu nome é " + nome + sobrenome;
}
nomeCompleto();

//Crie um método chamado `mostrarIdade`, que retorne a frase:
//- "Olá, eu tenho [IDADE] anos!"
function mostrarIdade(idade) {
    return "Olá!, eu tenho " + idade + "anos";
}
mostrarIdade();

//Crie um método chamado `mostrarPeso`, que retorne a frase:
//- "Eu peso [PESO]Kg."
function mostrarPeso(peso) {
    return "Eu peso" + peso + "Kg";
}
mostrarPeso();

//Crie um método chamado `mostrarAltura` que retorne a frase:
//- "Minha altura é [ALTURA]m."
function mostrarAltura(altura) {
    return "Minha altura é" +altura+ "m"
}
mostrarAltura();

// Agora vamos brincar um pouco com o objeto criado:
// Qual o nome completo da pessoa? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
console.log(nomeCompleto(pessoa.nome,pessoa.sobrenome));

// Qual a idade da pessoa? (Use a instrução para responder e comentários
// inline ao lado da instrução para mostrar qual foi a resposta retornada)
console.log(mostrarIdade(pessoa.idade));

// Qual o peso da pessoa? (Use a instrução para responder e comentários  
//inline ao lado da instrução para mostrar qual foi a resposta retornada)
console.log(mostrarPeso(pessoa.peso));

//Qual a altura da pessoa? (Use a instrução para responder e comentários
//inline ao lado da instrução para mostrar qual foi a resposta retornada)
console.log(mostrarAltura(pessoa.altura));

//Faça a `pessoa` fazer 3 aniversários.
var aniversariosEmAnos = function (anos) {
    while (anos =! 0) {
        pessoa.fazerAniversario();
    }
    return pessoa.idade;
}

console.log(aniversariosEmAnos(anos));

// Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x, com metragens diferentes passadas por parâmetro.
var camanhada