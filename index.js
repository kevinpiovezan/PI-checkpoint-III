const curso = require('./curso');
const listaEstudantes = curso.listaDeEstudantes;

listaEstudantes.forEach((aluno) => {
    console.log("Aluno:");
    console.log(aluno.Nome);
    console.log("Notas: "+aluno.Notas);
    console.log("Média: "+aluno.calcularMedia());
    console.log("Faltas: "+aluno.QuantidadeDeFaltas);
    console.log(`Passou na matéria: ${curso.passouNaMateria(aluno)}`);
    console.log("===========================")

})
console.log(curso.listaDeAprovados());
