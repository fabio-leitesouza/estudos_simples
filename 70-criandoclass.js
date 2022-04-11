//dar sempre o nome da classe com letra maiúscula
class Aluno{
    constructor(nome, sobrenome, ra, notas){
        this.nome = nome
        this.sobrenome = sobrenome
        this.ra = ra
        this.notas = notas
    }
    avaliar(nota){
        this.notas.push(nota)
    }
    exibirNotas(){
        console.log(this.notas)
    }    
}

const gabriela = new Aluno("Gabriela", "Silva", "171171", [0]) 

gabriela.avaliar(2)

gabriela.exibirNotas()

console.log(gabriela)