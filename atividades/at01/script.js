function carregar() {
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)

    var data = new Date()
    var hora = data.getHours()
  
    msg.innerText = `Agora são ${hora} horas`

    if (hora > 0 && hora < 12) {
        img.src = "imagens/manha.jpg"
        document.body.style.background = "#a99719"
        //BOM DIA
    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/tarde.jpg"
        document.body.style.background = "#e07e6c"
        // BOA TARDE
    }else {
        img.src = "imagens/noite.jpg"
        document.body.style.background = "#2f4c64"
        // BOA NOITE
    }
}