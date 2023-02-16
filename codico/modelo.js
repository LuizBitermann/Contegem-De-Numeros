function contar(){
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
  //  window.alert ('[ERRO] faltam dados')
    res.innerHTML = 'impossivel contar'
}else{
    res.innerHTML = 'contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        window.alert('passo invalido! considerando passo 1')
        p = 1
    }
if (i < f) {
    //contagem crescente
    for(let c = i  ; c <= f    ; c += p    ){ // criou-se a var (c) para receber (i) para botar na resposta
        res.innerHTML += ` ${c} \u{1F449} `
            }
               
}else{
    //contagem regressiva
   for(  c = i ; c >= f   ; c -= p  ){ // c recebe i, se o valor de c for maior ou igual a f , entao c subtrai igual o valor de p ate for falso
        res.innerHTML += `${c} \u{1F449}`
   }
   res.innerHTML += `\u{1F3C1}`  
        }
    }
 }

