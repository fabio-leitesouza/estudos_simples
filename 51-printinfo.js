const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com"
}

//acessando a informação usando notação de ponto
console.log(`O nome do aluno é ${aluno.nome} e ele tem ${aluno.idade} anos de idade`)

/*Com a função .sustring conseguimos selecionar exatamente
 qual parte da string queremos*/
console.log(`Documento: ${aluno.cpf.substring(0,3)}`)