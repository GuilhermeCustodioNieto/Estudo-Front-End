/*
 Faça um algorítmo que dado as 3 notas de um aluno, mostre sua média e a classificação de acordo com o cálculo abaixo
 
 Média = (nota 1 + nota2 + nota3) / 3;

 Classificação 

 - Média menor que 5, reprovação
 - Média entre 5 e 7, recuperação
 - Média acima de 7, passou no semestre

 */

 let nota1 = 5, nota2 = 7, nota3 = 9;

 let media = (nota1 + nota2 + nota3) / 3;

 if (media < 5 ){
    console.log("Reprovado");
 } else if(media >= 5 && media <= 7){
    console.log("Recuperação");
 } else{
    console.log("Aprovado");
 }

 console.log("Sua média foi: " + media);
