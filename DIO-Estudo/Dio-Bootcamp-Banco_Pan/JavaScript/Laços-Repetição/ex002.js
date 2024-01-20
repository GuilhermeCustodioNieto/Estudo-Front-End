/**
 * Crie um programa que pode percorrer uma lista de números e somente exiba os números pares
 */

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function verifyIfEven(myNum) {
    if (myNum % 2 == 0){
        return myNum
    }
}

for (let i=0; i<numbers.length;i++){
    console.log(verifyIfEven(numbers[i]));
}