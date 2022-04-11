//classe e o nome
class Aluno {
    //construtor(new) e propriedades
    constructor(nome, sobrenome, ra, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.ra = ra
        this.email = email
    }
    exibirNomeCompleto(){
        console.log(` ${nome} ${this.sobrenome}`)
    }
}