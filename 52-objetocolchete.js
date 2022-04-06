const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com"
}

//acessando a informação usando notação de colchetes. passamos o valor como variável
const chaves = ["nome", "idade", "cpf", "email"]

console.log(aluno[chaves[0]])
console.log(aluno["nome"])

chaves.forEach(info => console.log(aluno[info]))