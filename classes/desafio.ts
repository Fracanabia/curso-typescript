// 1
class Moto {
  public velocidade: number = 0;
  constructor(public nome: string) {}
  buzinar(): void {
    console.log("Tooooooooooooooot!");
  }
  acelerar(delta: number): number {
    return (this.velocidade = this.velocidade + delta);
  }
}

const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// 2
abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {}
  abstract area(): number;
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 20);
retangulo.base = 5;
// retangulo.altura = 7;
console.log(retangulo.area());

// 3
class Estagiario {
  private _primeiroNome: string = "";

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(valor: string) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
      this._primeiroNome = "";
    }
  }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Wesley";
console.log(estagiario.primeiroNome);
console.log(estagiario);
