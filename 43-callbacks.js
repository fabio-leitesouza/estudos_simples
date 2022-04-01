//Uma função callback é uma função passada a outra função como argumento, 
//que é então invocado dentro da função externa para completar algum 
//tipo de rotina ou ação.

const turmaDaManha = ['Mayllon', 'Rafael', 'Victória']

turmaDaManha.forEach(mostraAlunos)

function mostraAlunos(nome){
    console.log(nome)
}