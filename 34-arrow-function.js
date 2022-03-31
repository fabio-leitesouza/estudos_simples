const imc = (peso, altura) => peso / (altura*altura)

//arrow function com mais de uma linhas de instrução
const somaNumerosPequenos = (num1, num2) => { 
    if(num1 || num2 > 10){
        return 'somente números de 1 a 9'
    }else{
        return num1 + num2
    }
}