const aluno = {
    nome: "Rafael",
    idade: 19,
    cpf: "151598565432",
    email: "rafael@gmail.com",
    fones: ["444455555", "778779799"],
    parentes: [{
            nome: "Maria",
            parentesco: "Mãe",
            dataNasc: "19/11/1974"},
        {
            nome: "João",
            parentesco: "Pai",
            dataNasc: "02/06/1972"
        }
    ],
    notaFinal: 10,
    avaliar: function(nota){
        //this(esta) instancia de objeto
        this.notaFinal += nota
    }
}

let consulta = ""
for(let info in aluno){
    
    if(typeof aluno[info] === "object" || typeof aluno[info] === "function"){
        continue
        
    }else{
        consulta += `
        ${info} =+=-> ${aluno[info]} \n
        `
    }
}

console.log(consulta)



/*O typeof é uma palavra-chave que usamos no JavaScript para que o
     JavaScript nos diga qual que é o tipo de dado, ou seja, 
     o tipo de dado de uma função ela vai retornar function, se 
     pedirmos o typeof de um tipo de dado do que é uma string, 
     ele tem que nos retorna string, então conseguimos fazer algumas 
     verificações e validações, usando essa palavra-chave typeof.*/