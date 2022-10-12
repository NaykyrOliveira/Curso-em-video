function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'foto-manha.webp'
        document.body.style.background = '#f3b872'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde
        img.src = 'foto-tarde.webp'
        document.body.style.background = '#f99d52'
    } else {
        // Boa Noite
        img.src = 'foto-noite.webp'
        document.body.style.background = '#cf586e'
    }
}