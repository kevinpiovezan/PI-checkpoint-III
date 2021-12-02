class Aluno {
    Nome;
    QuantidadeDeFaltas;
    Notas;
    constructor(nome, quantidadeDeFaltas, notas) {
        this.Nome = nome;
        this.QuantidadeDeFaltas = quantidadeDeFaltas;
        this.Notas = notas;
    }
    calcularMedia(){
        const soma = this.Notas.reduce((acc, nota)=> {
            return acc + nota;
        }, 0);
        const media = soma / this.Notas.length;
        return media;
    }
    faltas(){
        this.QuantidadeDeFaltas++;
        return this.QuantidadeDeFaltas;
    }
}
module.exports = Aluno;