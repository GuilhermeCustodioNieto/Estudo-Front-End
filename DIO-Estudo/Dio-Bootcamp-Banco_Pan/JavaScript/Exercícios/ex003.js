/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha a condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição do método de pagamento escolhida e efetuar o cálculo adequado

Código condição de pagamento:

1 Á vista Débito, recebe 10% de desconto;
2 Á vista no dinheiro ou pix, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta
4 Acima de duas vezes, preço de etiqueta mais juros de 10%
*/

let precoProduto = 50.0;
let condicaoPagamento = "débito";

if (condicaoPagamento === 1) {
  console.log(precoProduto - precoProduto * 0.1);
} else if (condicaoPagamento === 2) {
  console.log(precoProduto - precoProduto * 0.15);
} else if (precoProduto == 3) {
  console.log(precoProduto);
} else {
  console.log(precoProduto + precoProduto * 0.1);
}
