const Aluno = require("./aluno");
const listaEstudantes = [];
const kevin = new Aluno("Kevin Piovezan", 0, [8,8,8,8]);
kevin.faltas();
const pamela = new Aluno("Pamela Piovezan", 0, [9,9,6,9]);
pamela.faltas();
const heverton = new Aluno("Heverton Sousa", 2, [10,7,7,8.5]);
listaEstudantes.push(kevin,pamela,heverton);
module.exports=listaEstudantes;
