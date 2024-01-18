function verificarMaioridade(idade){
    if (idade < 18){
        console.log("Menor de idade");
    } else{
        console.log("Maior de idade");
    }
}

(function () {
    verificarMaioridade(16);
}) ()