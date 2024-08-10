const semaro = document.getElementById("semaforo")
const vermelho = document.getElementById("vermelho")
const amarelo = document.getElementById("amarelo")
const verde = document.getElementById("verde")
const automatico = document.getElementById("auto")

function luzVermelho() {
    semaro.src = "./img/vermelho.png"
}

function luzAmarelo() {
    semaro.src = "./img/amarelo.png"
}

function luzVerde() {
    semaro.src = "./img/verde.png"
}

function semaforoAuto() {
    setInterval(() => {

        setTimeout(() => {
            semaro.src = "./img/vermelho.png"
        }, 500)

        setTimeout(() => {
            semaro.src = "./img/amarelo.png"
        }, 1000)

        setTimeout(() => {
            semaro.src = "./img/verde.png"
        }, 1500)
        
    }, 1700)
}

vermelho.addEventListener('click', luzVermelho)
amarelo.addEventListener('click', luzAmarelo)
verde.addEventListener('click', luzVerde)
automatico.addEventListener('click', semaforoAuto)