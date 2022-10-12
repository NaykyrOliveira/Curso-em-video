function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var resultado = window.document.getElementById('resultado')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formsexo = window.document.getElementsByName('radsexo')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formsexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                // Criança
                img.setAttribute('src', 'bebe-m.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adulto-m.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.webp')
            }
        } else if (formsexo[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-f.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-f.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-f.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-f.webp')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
        img.style.borderRadius = '50%'
    }
}