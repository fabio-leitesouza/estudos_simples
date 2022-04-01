/*O método reduce() executa uma função reducer (fornecida por você) para 
 elemento do array, resultando num único valor de retorno.somando*/

const salaManha = [5, 10, 8, 6.5, 7, 9, 4, 3, 5.5]
const salaTarde = [6, 5, 7, 1, 9, 8]
const salaNoite = [5, 5, 4.5, 6]

function media(notas){         //acumulador e valor atual 
    const soma = notas.reduce((acum, atual) => atual + acum, 0)
    return soma/notas.length
}   

console.log(`Média é: ${media(salaManha)}`)

//https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380