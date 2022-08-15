// let & const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar o casaco!";
  console.log(acao);
}

const cpf: string = "123.456.000-99";
// cpf = "123.333.333-00";
console.log(cpf);

var segredo = "externo";
function revelar() {
  var segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  {
    const def = "def";
    console.log(def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

// Arrow function
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2, 3));

const saudacao = () => console.log("Olá!");
console.log(saudacao());

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("João");

// this
// function normalComThis() {
//   console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind({ nome: "Ana" });
// normalComThisEspecial();

// this??
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind({ nome: "Ana" });
// arrowComThisEspecial();

// Paràmetro padrão
function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);

// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));
console.log(Math.max(...numbers));

const turmaA: string[] = ["João", "Maria", "Fernanda"];
const turmaB: string[] = ["Fernando", "Miguel", "Lorena", ...turmaA];
console.log(turmaB);

function retornoArray(...args: number[]): number[] {
  return args;
}
const numeros = retornoArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeros);
console.log(retornoArray(...numbers));

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1, "abc", false];
function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Destructuring (object)
const item = {
  nome: "SSD 480GB",
  preco: 200,
  caracteristicas: {
    w: "Importado",
  },
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);

const {
  nome: n,
  preco: p,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(p);
console.log(w);

// Template string
const usuarioID: string = "MeuID";
const notificacoes: string = "19";
// const boasVindas =
//   "Boas vindas " + usuarioID + " Notificações: " + notificacoes;
const boasVindas = `Boas vindas ${usuarioID} Notificações: ${
  parseInt(notificacoes) > 9 ? "+9" : notificacoes
}`;
console.log(boasVindas);

// DEASAFIO
const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

const dizerOla = function (nome: string = "Pessoa"): void {
  console.log(`Ola ${nome}`);
};
dizerOla();
dizerOla("Anna");

const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

const array: number[] = [55, 20];
array.push(...nums);
console.log(array);

const notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

const cientista: { primeiroNome: string; experiencia: number } = {
  primeiroNome: "Will",
  experiencia: 12,
};
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// FIM DEASAFIO

// Callback

// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback("3s depois...");
//   }, 3000);
// }

// esperar3s(function (resultado) {
//   console.log(resultado);
// });

// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve("3s depois promise...");
//     }, 3000);
//   });
// }

// esperar3sPromise().then((dado) => console.log(dado));
// esperar3sPromise().then(console.log);

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => res.json())
//   .then((personagem) => personagem.films)
//   .then((films) => fetch(films[0]))
//   .then((resFilm) => resFilm.json())
//   .then((filme) => console.log(filme.title));
