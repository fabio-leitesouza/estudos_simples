const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
//usando notação de ponto
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

//usando notação de colchetes
delete objPersonagem["status"]

console.log(objPersonagem.status) //undefined

console.log(objPersonagem)