const nome = "Giovane";
let nome2 =  "";
let pessoaDefault = {

    nome: "Giovane Amaral",
    idade: "19",
    trabalho: "Estudante"
}

let nomes = ["Giovane Amaral", "Maria Clara", "Leandra Silva"];
let pessoas = [
    {

    nome: "Giovane Amaral",
    idade: "19",
    trabalho: "Estudante"
},
    {
        nome: "Maria Clara",
        idade: "19",
        trabalho: "Estudante"
    }    
];


function alterarNome(){
    nome2 = "Maria Silva";
    console.log("Valor alterado");
    console.log(nome2);
}

function recebealteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabaçho:");
console.log(pessoa.trabalho);

}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
    console.log("Nome:");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("trabalho:");
    console.log(item.trabalho);
    })
}


imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "50",
    trabalho: "Peão"
});

console.log(pessoas);

/*imprimirPessoa(pessoaDefault);

imprimirPessoa({
    nome: "Maria",
    idade: "19",
    trabalho: "Estudante"
})*/




//recebealteraNome("João Corre");
//recebealteraNome("Maria Silva");
//alterarNome();