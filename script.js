function load() {
    let msg = window.document.querySelector('.msg')
    let img = window.document.querySelector('.img')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} hrs.`
    if (hora >= 0 && hora < 12){
        img.src = "./IMG/manha.jpg"
        document.body.style.background = "#FCCD71"
    }
    else if ( hora >= 12 && hora <= 18) {
        img.src = "./IMG/tarde.jpg"
        document.body.style.background = "#912F16"
    }
    else {
        img.src = "./IMG/noite.jpg"
        document.body.style.background = "#151821"
    }
}