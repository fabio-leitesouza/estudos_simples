function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
    this.saldo += valor
    }
   }
   const souza = new Cliente("Souza", "12312312312", "souza@email.com", 100)

   function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }
   const silva = new ClientePoupanca("Silva", "12312312312", "silva@email.com", 100, 200)
        //adicionar ao protótipo a função depositarPoup
   ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
   }
//Na saída do console veremos que usando .hasOwnProperty(), a função “saldoPoup” só existe no objeto do tipo ClientePoupanca.
console.log(souza.hasOwnProperty("saldoPoup"))
console.log(silva.hasOwnProperty("saldoPoup"))
console.log(souza instanceof Cliente)
console.log(typeof souza)
console.log(typeof silva)
console.log(silva instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)

//Os objetos souza e silva são do tipo object, ou seja, ambos herdam do protótipo de object, que está associado a todo objeto criado no JavaScript.