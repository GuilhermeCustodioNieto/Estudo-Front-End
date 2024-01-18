/*
1- crie uma classe para representar carros
Os carros possuem marca, uma cor e um gasto médio de combustível por km rodado

crie um método que dado a quantidade de quilometros e o preço de combustível nos de o valor gasto em reais para realizar esse percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedio;

  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  custoViagem(quantidadeKm, precoCombuistivel) {
    return quantidadeKm * this.gastoMedio * precoCombuistivel;
  }
}

const uno = new Carro(`Fiat`, `prata`, 1 / 12);

console.log(uno.custoViagem(70, 5));
