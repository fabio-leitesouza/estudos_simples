//vamos dar comportamento e não só propriedades

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
        //this(esta) instancia de objeto
        this.notaFinal += nota
    }
}
console.log(aluno.notaFinal)
aluno.avaliar(5)
console.log(aluno.notaFinal)