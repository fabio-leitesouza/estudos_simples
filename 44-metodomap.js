const notas = [5, 6, 10, 3]

//a diferença de usar o map no lugar do forEach é que ele retorna com 
//um nova array e não só executa
const adicionaUmPonto = notas.map(nota => ++nota)
//const adicionaUmPonto = notas.map(nota => nota == 10 ? nota : ++nota)
// no ++nota e incrementa e depois passa para array

console.log(adicionaUmPonto)