const alunos = ['João ', 'Tati ', 'Andralyssa ', 'Rafael '
, 'Bruna ', 'Gabriela ', 'Maria ', 'Vitos']
console.log(alunos)

                            //do índice 0 até a metada a da array
const sala1 = alunos.slice(0, alunos.length/2)
                            //da metada pra frente até o final
const sala2 = alunos.slice(alunos.length/2)

console.log(sala1)
console.log(sala2)

//usamos o .splice para remover e adicionar novos valores
sala1.splice(0, 2, 'Mayllon ')

console.log(sala1)
