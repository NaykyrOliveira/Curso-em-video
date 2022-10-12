function tabuada() {
    let numero = window.document.getElementById('txtnumero')
    let tabuada = window.document.getElementById('select-tabuada')
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let Numero = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = window.document.createElement('option')
            item.text = `${Numero} x ${contador} = ${Numero*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
    
}