const numeros = [10, 20, 15, 5]

let soma = 0

//forEach (para cada). 
//função call-back 
//é um método que está levando como argumento uma função
numeros.forEach(numeros => {
            //o método forEach já interpreta os índices da array
    soma += numeros
})

// numeros.forEach(function(numeros){
//     soma += numeros
// })

let media = soma/numeros.length

console.log(media)