function fibonacci(numero){

let pwr = Math.pow(numero, 2)

const fibonacci = (Math.round((Math.pow(1.618034,numero) - Math.pow((1 - 1.618034),numero) )/ Math.sqrt(5)))
const calc1 = (5 * pwr) + 4
const calc2 = (5 * pwr) - 4

if(Math.sqrt(calc1) == Math.round(Math.sqrt(calc1)) || Math.sqrt(calc2) == Math.round(Math.sqrt(calc2))){
    console.log('Esse número pertence a sequência de fibonacci, pois é um quadrado perfeito')
}else{
    console.log('Esse número não pertence a sequência de fibonacci, por não ser um quadrado perfeito')
}
    console.log('O numero ' + numero +' calculado na sequencia de Fibonacci é :' + fibonacci)
}

fibonacci(13)
