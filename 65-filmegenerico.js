function Filme(nome, lancamento, genero, notas){
    this.nome = nome
    this.lancamento = lancamento
    this.genero = genero
    this.notas = notas
    this.avaliar = function(avaliacao){
        this.notas.push(avaliacao)
    }
}
//usamos a palavra new(palavra chave) para dizer que  estamos utilizando a partir da nossa função filme, estamos criando um new, criando um novo filme, chamamos isso de instância, então a nossa const house é uma nova instância de filme criado a partir da nossa função construtora.
const house = new Filme("House", "1977", "Terror", [])

console.log(house)

//acessar house.__proto__.__proto__