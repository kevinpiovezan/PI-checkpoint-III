const listaEstudantes = require('./estudantes');
const Curso = {
    nomeDoCurso: "Certified Tech Developer",
    notaDeAprovacao: 8,
    faltasMaximas: 2,
    listaDeEstudantes: listaEstudantes,
    adicionarAluno: (aluno) => {Curso.listaDeEstudantes.push(aluno)},
    passouNaMateria: function(aluno) {
        const media = aluno.calcularMedia();
        const faltas = aluno.QuantidadeDeFaltas;
        const faltasMaximas = this.faltasMaximas;
        const notaDeAprovacao = this.notaDeAprovacao;
        
        if(faltas > faltasMaximas) return false;

        if(media < notaDeAprovacao) return false;

        if(faltas === faltasMaximas) {
            if(media >= (notaDeAprovacao * 1.1)) {
                return true;
            }
            return false;
        }
        return true;
    },
    listaDeAprovados: function() {
        const estudantes = this.listaDeEstudantes;
        const aprovados = [];
        estudantes.forEach(function(aluno) {
            aprovados.push(Curso.passouNaMateria(aluno));
        });
        return aprovados;
    }
}
module.exports = Curso;