/*
Faça um prograa para calcular o valor de uma viagem.

Você terá 5 variáveis

1 - Preço do Etanol
2 - preço da gasolina
3 - Tipo do combustível do seu carro
4 - Gasto médio de combustível
5 - Distancia em KM da viagem

imprimir no console o preço da viagem
*/

let ethanolPrice = 5.79,
  gasolinePrice = 6.66;
let tipoCombustivel = "ethanol";
let kmDistance = 100;
let averageGasolineComsuption = 10;
let price = 0;

if (tipoCombustivel === "ethanol") {
  price = ethanolPrice * (kmDistance / averageGasolineComsuption);
} else {
  price = gasolinePrice * (kmDistance / averageGasolineComsuption);
}

console.log("Price of the trip: " + price.toFixed(2));
