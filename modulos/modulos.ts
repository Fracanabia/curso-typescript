import { areaCircunferencia as circ } from "./circunferencia";
// import { areaRetangulo } from "./retangulo";
import retangulo from "./retangulo";

console.log("Modulo carregado...");
console.log(retangulo(7, 8));
console.log(circ(2));

const { digaOi } = require("./novo");
console.log(digaOi("Ana"));
