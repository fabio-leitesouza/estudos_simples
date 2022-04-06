const objPersonagem = {
    nome: "Kiki",
    profissao: "entregadora",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Kiki a bruxinha"
   /*O método Object.create() cria um novo objeto utilizando como 
   protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 
   é uma instância diferente de objPersonagem e pode ser trabalhada de 
   forma independente.*/
   
   console.log(objPersonagem.nome) //Kiki
   console.log(objPersonagem2.nome) //kiki a bruxinha