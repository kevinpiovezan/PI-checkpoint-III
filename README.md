# PROGRAMAÇÃO IMPERATIVA
## CHECKPOINT 3
<p>
    Os arquivos estão dispostos da seguinte maneira:
    <ul>
        <li><strong>index.js</strong> => 
            <span>
                Exibição dos Alunos, testando métodos "calcularMedia" que pertence a classe Aluno, "passouNaMateria" e "listaDeAprovados" que pertencem ao objeto literal Curso.
            </span> 
        </li>
        <li><strong>aluno.js</strong> => 
            <span>
                Classe Aluno, com atributos: 'Nome', "QuantidadeDeFaltas" e "Notas", métodos: "calcularMedia", "faltas".
            </span> 
        </li>
        <li><strong>curso.js</strong> =>
            <span>
                Objeto literal com os atributos: "nomeDoCurso", "notaDeAprovacao", "faltasMaximas", "listaDeEstudantes"(Que importa um array de objetos do arquivo estudantes.js), com os métodos: "adicionarAluno", "passouNaMateria"e "listaDeAprovados"
            </span> 
        </li>
        <li> <strong>estudantes.js</strong> =>
            <span>
                Faz o import da Classe Aluno, instancia objetos com o construtor, utiliza o método faltas() para adicionar faltas aos alunos, insere todos dentro de um array que é exportado, para ser importado pelo curso.js
            </span> 
        </li>
    </ul>
</p>

<br>

### Navegue até a pasta do arquivo e execute o comando abaixo para testar
```bash
    node index.js
```