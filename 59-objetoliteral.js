const objPersonagem = {
    nome: "Kiki",
    profissao: "entregadora",
    nivel: "20"
   }
const objPersonagem2 = objPersonagem
/*A variável objPersonagem2 não fez uma cópia do objeto original, 
apenas serviu como referência para o objeto original objPersonagem. 
Assim, qualquer alteração em qualquer um dos objetos altera ambos. 
Isso porque o JavaScript, quando trabalha com objetos, acessa os 
valores deles fazendo referência ao original. mas não cria uma cópia.*/
   
objPersonagem2.nome = "Kiki a bruxinha"

console.log(objPersonagem.nome) //Kiki a bruxinha
console.log(objPersonagem2.nome) //Kiki a bruxinha

