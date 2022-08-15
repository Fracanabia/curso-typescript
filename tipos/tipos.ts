// string
let nome: string = "João";
// nome = 27.5
console.log(nome);

// number
let idade: number = 27;
// idade = 'João'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "idade 27";
console.log(typeof minhaIdade);

// array
let hobbies: string[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

// tupla
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

// enum
enum Cor {
  Cinza, //0
  Verde = 100,
  Azul, // 101
}
let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2022 };
console.log(carro);

// funções
function retornaMeuNome(): string {
  return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}
digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(2.4, 4.2));

// tipo função
let calculo: (numeroA: number, numeroB: number) => number;
calculo = multiplicar;
console.log(calculo(2, 6));

// objetos
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};
console.log(usuario);

// DESAFIO
function baterPonto(numero: number): string {
  return numero <= 8 ? "Ponto normal" : "Fora do horário";
}

// alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Adão", "Bastião"],
  baterPonto,
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(5));
console.log(funcionario.baterPonto(9));
// END DESAFIO

// untion types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "20";
console.log(`Minha nota é ${nota}!`);

// checando tipos
let valor = 30;
if (typeof valor === "number") {
  console.log("É um number!");
} else {
  console.log(typeof valor);
}

// never
function falha(msg: string): never {
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

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato: Contato = {
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

// DESAFIO
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};
let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};
let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria,
  contatos: ["12312312", "46545645656"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);

// END DESAFIO
