const aluno = [
    {
        nome: "Rafael",
        idade: 19,
        cpf: "151598565432",
        email: "rafael@gmail.com",
        fones: ["444455555", "778779799"],
        parentes: [{
            nome: "Maria",
            parentesco: "Mãe",
            dataNasc: "19/11/1974"
        },
        {
            nome: "João",
            parentesco: "Pai",
            dataNasc: "02/06/1972"
        }
        ],
        notaFinal: 0,
        avaliar: function (nota) {

            this.notaFinal += nota
        }
    },
    {
        nome: "Victória",
        idade: 20,
        cpf: "5165549848",
        email: "victoria@gmail.com",
        fones: ["9898465446", "458546465"],
        parentes: [{
            nome: "Pedrita",
            parentesco: "Mãe",
            dataNasc: "19/11/1974"
        },
        {
            nome: "Joano",
            parentesco: "Pai",
            dataNasc: "02/06/1972"
        }
        ],
        notaFinal: 10,
        avaliar: function (nota) {

            this.notaFinal += nota
        }
    }]
//operador de espalhamento
const listParentes = [...aluno[0].parentes,...aluno[1].parentes]
console.log(listParentes)
console.table(listParentes)

