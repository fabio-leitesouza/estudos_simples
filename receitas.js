function Receitas(nome, tempo, sabor, ingredientes, estrelas, avaliacao){
    this.nome = nome
    this.tempo = tempo
    this.sabor = sabor
    this.ingredientes = ingredientes
    this.estrelas = estrelas
    this.avaliacao = avaliacao
    this.inserirIngrediente = function(material){
        this.ingredientes.push(material)
    }
    this.avaliacaoMedia = function(nota){
        this.avaliacao.push(nota)
        let soma = 0
        this.avaliacao.forEach(element => {
            soma += element
        }); 

        this.estrelas = soma/this.avaliacao.length
        
    }
}

const Brownie = new Receitas('Brownie', "45min","doce demais", [],0, [])

Brownie.inserirIngrediente("Chocolate em pó")
Brownie.inserirIngrediente("Açucar refinada")
Brownie.inserirIngrediente("Manteiga")
Brownie.inserirIngrediente("Chocolate meio amargo")
Brownie.inserirIngrediente("8 ovos")

Brownie.avaliacaoMedia(5)
Brownie.avaliacaoMedia(3)
Brownie.avaliacaoMedia(2)

console.log(Brownie)