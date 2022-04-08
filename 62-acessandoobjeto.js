const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com",
    fones: ["444455555", "778779799"],
    parentes: [{
            nome: "Maria",
            parentesco: "Mãe",
            dataNasc: "19/11/1974"},
        {
            nome: "João",
            parentesco: "Pai",
            dataNasc: "02/06/1972"
        }
    ],
    notaFinal: 10,
    avaliar: function(nota){
        
        this.notaFinal += nota
    }
}

const verificaParentes = (obj) => {
    const parenAluno = Object.keys(obj); //retorna uma array com todas as keys(chaves)
    //como é uma array podemos usar métodos de array
    if(parenAluno.includes("parentes")){
        console.log(`Que bom que vc tem parentes ${obj.nome}
        `);
    }
}

verificaParentes(aluno)

console.log(Object.values(aluno)) //pega os valores de um objeto em uma array

console.log(Object.entries(aluno)) //traz uma array de arrays com o conjunto de chaves e valores 

