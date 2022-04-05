const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com",
    fones: ["444455555", "778779799"]
}

aluno.parentes = {
    nome: "Maria",
    parentesco: "Mãe",
    dataNasc: "19/11/1974"
}

console.log(aluno)

aluno.parentes.nome = "Joana"

console.log(aluno)