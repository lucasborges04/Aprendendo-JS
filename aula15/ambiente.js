let num = [4, 1, 2, 9]
num.push(3)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(17)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}