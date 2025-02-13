function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){        
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            // COntagem crescente
            for(c = i; c <= f; c += p){ //Podemos adicionar emojis também, mas preferi não usar
                res.innerHTML += `${c} - ` //Para adicionar emoji, em frente a "${c}", adicione: \u{1F603} para adicionar uma carinha feliz por exemplo
            } //Se quiser usar outro emoji é só mudar o código entre chaves após o "\u".
            // Contagem regressiva      
        } else{
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} - `
            }                        
        }
        res.innerHTML += 'FIM!'
    }
}