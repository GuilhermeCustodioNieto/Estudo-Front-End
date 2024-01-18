/*
O IMC (Indice de massa corporal) é um critério da organização mundial de saude para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:

IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura, mostre sua condição de acordo com a tabela abaixo:

- Abaixo de 18.5 - abaixo do peso
- entre 18.5 e 25: peso Normal
- Entre 25 e 30 - acima do peso
- entre 30 e 40 - obeso
- Acima de 40 - obesidade grave

*/

let altura = 1.7,
  peso = 80;

const IMC = peso / (altura * altura);

if (IMC < 18.5) {
  console.log("Abaxo do peso");
} else if (IMC <= 25) {
  console.log("Peso normal");
} else if (IMC <= 30) {
  console.log("Acima do peso");
} else if (IMC <= 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}

console.log("Fim do programa");
