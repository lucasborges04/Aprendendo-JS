
let num = [3, 6, 1, 2]
/*
for(pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}