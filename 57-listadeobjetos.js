const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com",
    fones: ["444455555", "778779799"],
    parentes: [{
        nome: "Maria",
        parentesco: "Mãe",
        dataNasc: "19/11/1974"
    }]
}

aluno.parentes.push({
    nome: "João",
    parentesco: "Pai",
    dataNasc: "02/06/1972"
})

console.log(aluno)

const maisNovo = aluno.parentes.filter(paren => 
paren.dataNasc==="19/11/1974")

console.log(maisNovo[0].nome)