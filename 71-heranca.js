//extends é herança - a classe programador herda de aluno
class Programador extends Aluno{
    constructor(nome, sobrenome, ra, email, linguagem){
        super(nome, sobrenome, ra, email)
        //this para definir propriedade apenas do programador
        this.linguagem = linguagem
    }
}
//um objeto é uma instância de uma classe
const novoDev = new Programador("Nicolas", "Santos", "nicolas@email.com", "JavaScript")