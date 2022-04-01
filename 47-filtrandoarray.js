

const alunos = ['Mayllon', 'Rafael', 'Victória', 'Mateus', 'Michael']
const notas = [5, 7, 4, 10, 2]

//por padrão no JavaScript quando um parâmetro exite e 
//não precisa ser declarado colocamo um _
const reprovados = alunos.filter((_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)

/*O método filter() cria um novo array com todos os elementos que passaram no 
teste implementado pela função fornecida. Ela retorna booleano (true/false)*/