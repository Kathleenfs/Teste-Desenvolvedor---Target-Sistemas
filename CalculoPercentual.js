const estados = [{estado:'SP', valor:67.83643},
{estado:'RJ', valor: 36.67866},
{estado:'MG', valor: 29.22988},
{estado:'ES', valor: 27.16548},
{estado:'OUTROS', valor: 19.84953}]



let soma = 0

for(i = 0; i < estados.length; i++){
    const conversao = parseFloat(estados[i].valor.toFixed(3))
    soma += estados[i].valor
}
for (i = 0; i < estados.length; i++){
    const porcentagem  = estados[i].valor * 100 /soma
    console.log('O Estado de ' + estados[i].estado +' é represantado por '+ porcentagem.toFixed(1) + '% dentro do valor total mensal da distribuidora de R$' + soma.toFixed(2))
}






