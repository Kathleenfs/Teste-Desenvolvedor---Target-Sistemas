
let numero = 13
const fibonacci = (Math.round((Math.pow(1.618034,numero) - Math.pow((1 - 1.618034),numero) )/ Math.sqrt(5)))

console.log('O numero ' + numero +' calculado na sequencia de Fibonacci é :' + fibonacci)
let pwr = Math.pow(numero, 2)

const calc1 = (5 * pwr) + 4
const calc2 = (5 * pwr) - 4

if(Math.sqrt(calc1) == Math.round(Math.sqrt(calc1)) || Math.sqrt(calc2) == Math.round(Math.sqrt(calc2))){
    console.log('E Esse número pertence a sequência de fibonacci, pois é um quadrado perfeito')
}else{
    console.log('E esse número não pertence a sequência de fibonacci, por não ser um quadrado perfeito')
}

