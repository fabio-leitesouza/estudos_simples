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
class Estagiario extends Aluno{
    constructor(nome, sobrenome, ra, notas, relatorio){
        super(nome, sobrenome, ra, notas)
        this.relatorio = relatorio
    }
    
    statusRelatorio(avaliacao){
        this.relatorio += avaliacao
    }
}

const tati = new Estagiario("Tati","Ane","945563",[10,10],8)

console.log(tati)