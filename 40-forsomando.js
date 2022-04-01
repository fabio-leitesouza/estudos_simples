const numeros = [10, 20, 15, 5]
// se declararmos o let dentro do bloco a media não consegue acessar
let soma = 0

for(let i = 0; i < numeros.length; i++){
    //o += é como se fosse feito 'soma = soma +numeros[i] 
    soma += numeros[i]
}

let media = soma / numeros.length

console.log(media)