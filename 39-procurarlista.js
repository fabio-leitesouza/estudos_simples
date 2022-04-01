const turmaDaManha = ['Mayllon', 'Rafael', 'Victória']
const notasDaTurma = [5, 7, 6.5]
const carismaDaTurma = [9.5, 9.75, 8.5]

const listaDetalhada = [turmaDaManha, notasDaTurma, carismaDaTurma]

const exibeNomeNotaECarisma = (aluno) => {
    if(listaDetalhada[0].includes(aluno)){
        indice = listaDetalhada[0].indexOf(aluno)
        return `${listaDetalhada[0][indice]}, sua nota é ${listaDetalhada[1][indice]} e seu carisma é ${listaDetalhada[2][indice]}`
    }else{
        return 'Aluno não cadastrado'
    }
}
console.log(exibeNomeNotaECarisma('Rafael'))