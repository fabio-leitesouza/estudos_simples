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
    const parenAluno = Object.keys(obj);
    if(parenAluno.includes("parentes")){
        console.log(`Que bom que vc tem parentes ${obj.nome}
        `);
    }
}

verificaParentes(aluno)

console.log(Object.values(aluno))

console.log(Object.entries(aluno))

