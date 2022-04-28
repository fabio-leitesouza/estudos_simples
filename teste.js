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
        let soma = 0
        this.notas.forEach(element => {
            soma += element
        });
        let media = soma / this.notas.length
        return media
        
    }
    exibirNotas(){
        console.log(this.notas)

    } 
      
}

const gabriela = new Aluno("Gabriela", "Silva", "171171", []) 

gabriela.avaliar(2)
gabriela.avaliar(4)

console.log(gabriela.avaliar(6))

//gabriela.exibirNotas()

//console.log(gabriela)