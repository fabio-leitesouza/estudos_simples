const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com",
    fones: ["444455555", "778779799"]
}
//se na chave temos um dado array podemos usar qualquer método de array
aluno.fones.forEach(fone => {
    console.log(fone)
});