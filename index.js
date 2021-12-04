const curso = require('./curso');
const Aluno = require("./aluno");
const elina = new Aluno("Elina Sousa", 2, [10,10,10,9]);
elina.faltas();
curso.adicionarAluno(elina);
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
