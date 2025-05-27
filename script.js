
function carregar() {
    var msg = window.document.getElementsById('msg')
    var img = window.document.getElementsById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são $(hora) horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = '/png/manha.png'
    }
    else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        img.src = '/png/tarde.png'
    }
    else {
        //BOA NOITE!!
        img.src = '/png/noite.png'
    }
}