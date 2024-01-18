class Pessoa {
    nome; 
    idade;
    peso;

    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    describe() {
        return `nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}`;
    }

}

let gui = new Pessoa("Guilherme", 16, 65);

console.log(gui.describe());