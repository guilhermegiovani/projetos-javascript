const lampDesligada = document.getElementById("lampDesligada")
const lampLigada = document.getElementById("lampLigada")
const lampQuebrada = document.getElementById("lampQuebrada")
const divImgs = document.getElementById("imgs")
const btnLigar = document.getElementById("ligar")
const btnDesligar = document.getElementById("desligar")

function ligarLamp() {
    lampDesligada.classList.add("hiden")
    lampLigada.classList.remove("hiden")
    lampQuebrada.classList.add("hiden")
}

function desligarLamp() {
    lampDesligada.classList.remove("hiden")
    lampLigada.classList.add("hiden")
    lampQuebrada.classList.add("hiden")
}

// function isLampBroken() {
//     return lamp.src.indeOf('quebrada') > -1
// }

btnLigar.addEventListener('click', ligarLamp)

btnDesligar.addEventListener('click', desligarLamp)

divImgs.addEventListener('dblclick', () => {
    quebrarLamp()

    btnDesligar.removeEventListener('click', desligarLamp)
    btnLigar.removeEventListener('click', ligarLamp)
})

// divImgs.addEventListener("mouseleave", desligarLamp)
// divImgs.addEventListener("mouseover", ligarLamp)

