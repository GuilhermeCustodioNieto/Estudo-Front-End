function fazerPagamento(precoProduto, condicaoPagamento) {
  if (condicaoPagamento === 1) {
    console.log(precoProduto - precoProduto * 0.1);
  } else if (condicaoPagamento === 2) {
    console.log(precoProduto - precoProduto * 0.15);
  } else if (precoProduto == 3) {
    console.log(precoProduto);
  } else {
    console.log(precoProduto + precoProduto * 0.1);
  }
}

(function (){
    fazerPagamento(50.00, 1);
}) ();