"use strict";
// string
let nome = "João";
// nome = 27.5
console.log(nome);
// number
let idade = 27;
// idade = 'João'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "idade 27";
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// tupla
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2022 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.4, 4.2));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(2, 6));
// objetos
let usuario = {
    nome: "João",
    idade: 27,
};
console.log(usuario);
// DESAFIO
function baterPonto(numero) {
    return numero <= 8 ? "Ponto normal" : "Fora do horário";
}
let funcionario = {
    supervisores: ["Adão", "Bastião"],
    baterPonto,
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(5));
console.log(funcionario.baterPonto(9));
// END DESAFIO
// untion types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "20";
console.log(`Minha nota é ${nota}!`);
// checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 1,
    validarProduto() {
        if (this.nome.trim().length === 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    },
};
produto.validarProduto();
// null
/* When type checking, take into account 'null' and 'undefined'. */
// "strictNullChecks": true,
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato = {
    nome: "Fulano",
    tel1: "99117806",
    tel2: null,
};
console.log(contato);
let podeSerNulo = null; //any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = "abc";
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria,
    contatos: ["12312312", "46545645656"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
// END DESAFIO
//# sourceMappingURL=tipos.js.map