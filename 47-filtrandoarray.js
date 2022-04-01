const alunos = ['Mayllon', 'Rafael', 'Victória', 'Mateus', 'Michael']
const notas = [5, 7, 4, 10, 2]
//const carisma = [9.5, 9.75, 8.5, 10, 8]

//por padrão no JavaScript quando um parâmetro exite e 
//não precisa ser declarado colocamo um _
const reprovados = alunos.filter((_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)

/*o método filter é usado para retornar uma array com apenas alguns 
elementos do array principal através de uma função callback. 
Ela retorna booleano (true/false)*/