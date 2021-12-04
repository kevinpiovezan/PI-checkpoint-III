const listaEstudantes = require('./estudantes');
const Curso = {
    listaDeEstudantes: listaEstudantes,
    nomeDoCurso: "Certified Tech Developer",
    notaDeAprovacao: 8,
    faltasMaximas: 2,
    adicionarAluno: function(alunoNovo) {
    const estudantes = this.listaDeEstudantes;
    const novaListaAlunos = [];
    estudantes.forEach(function(alunosAntigos) {
        novaListaAlunos.push(alunosAntigos);
    });
    novaListaAlunos.push(alunoNovo);
    this.listaDeEstudantes = novaListaAlunos;
    return novaListaAlunos;     
    },
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