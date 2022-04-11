function heroi(nome, genero, poder, notas){
    this.nome = nome
    this.genero = genero
    this.poder = poder
    this.notas = notas
    this.avaliar = function(avaliacao){
        this.notas.push(avaliacao)
    }
}

function vilao(nome, genero, poder, notas, maldade){
    //call(chamar)
    heroi.call(this, nome, genero, poder, notas)
    this.maldade = maldade
}

const gargamel = new vilao("Gargamel", "Masculino", 8000, [],0)

console.log(gargamel)

vilao.prototype.avaliarMaldade = function(avaliacao){
    this.maldade += avaliacao
}

gargamel.avaliarMaldade(40)

console.log(gargamel.maldade)