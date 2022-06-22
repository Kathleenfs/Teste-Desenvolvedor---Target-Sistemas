function reversao(str){

let novaString = ""

for(i = str.length - 1; i >=0; i--){
    novaString += str[i]

}
console.log(novaString)
}
reversao("Brasil")