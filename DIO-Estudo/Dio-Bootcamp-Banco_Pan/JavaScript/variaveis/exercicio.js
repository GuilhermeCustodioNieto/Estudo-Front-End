/*
Faça um programa para calcular o valor de uma viagem
O programa vai ter 3 valores;

    1- Preco do combustível
    2- Gasto médio do combuistível  por km
    3 - distancia em km da viagem
Imprima no console o custo total da viagem
*/ 

const precoCombustivel = 5.61;
const gastoMedioLitros = 7;
let distanciaViagem = 30;

let total = precoCombustivel * (gastoMedioLitros / distanciaViagem);

console.log("O total de gastos é " + total.toFixed(2));
