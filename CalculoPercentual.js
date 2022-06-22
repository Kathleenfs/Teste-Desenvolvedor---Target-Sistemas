const estados = [{estado:'SP', valor:67.83643},
{estado:'RJ', valor: 36.67866},
{estado:'MG', valor: 29.22988},
{estado:'ES', valor: 27.16548},
{estado:'OUTROS', valor: 19.84953}]


function todos(ar){
    let soma = 0;
    for(i = 0; i < ar.length; i++){
         parseFloat(ar[i].valor.toFixed(3));
         soma += ar[i].valor;
}
    for(i = 0; i < ar.length; i++){
        const porcentagem  = (ar[i].valor * 100)/soma;
         console.log('O Estado de: ' + ar[i].estado +' é represantado por: '+ porcentagem.toFixed(1) + '% dentro do valor total mensal da distribuidora de R$' + soma.toFixed(2))
    }
}
todos(estados);










