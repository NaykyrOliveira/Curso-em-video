function contar() {
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let resultado = window.document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Falta digitar os valores!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br> '
        let Inicio = Number(inicio.value)
        let Fim = Number(fim.value)
        let Passo = Number(passo.value)
        if (Passo <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            Passo = 1
        }
        if (Inicio < Fim) {
            // Contagem crescente
            for (let contador = Inicio; contador <= Fim; contador += Passo) {
            resultado.innerHTML += ` ${contador} \u{002A} `
            }
        } else {
            // Contagem decrescente
            for (let contador = Inicio; contador>= Fim; contador -= Passo) {
                resultado.innerHTML += `${contador} \u{002A}`
            }
        }
        
    }
   
}