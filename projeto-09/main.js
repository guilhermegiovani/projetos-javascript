const semaro = document.getElementById("semaforo")
const vermelho = document.getElementById("vermelho")
const amarelo = document.getElementById("amarelo")
const verde = document.getElementById("verde")
const automatico = document.getElementById("auto")
let intervalId = null
let timeOutRedId = null
let timeOutYellowId = null
let timeOutGreenId = null

function luzVermelho() {
    pararAutomático()
    semaro.src = "./img/vermelho.png"
}

function luzAmarelo() {
    pararAutomático()
    semaro.src = "./img/amarelo.png"
}

function luzVerde() {
    pararAutomático()
    semaro.src = "./img/verde.png"
}

function semaforoAuto() {
    intervalId = setInterval(() => {

        timeOutRedId = setTimeout(() => {
            semaro.src = "./img/vermelho.png"
        }, 500)

        timeOutYellowId = setTimeout(() => {
            semaro.src = "./img/amarelo.png"
        }, 1000)

        timeOutGreenId = setTimeout(() => {
            semaro.src = "./img/verde.png"
        }, 1500)
        
    }, 1700)
}

function pararAutomático() {
    clearTimeout(timeOutRedId)
    clearTimeout(timeOutYellowId)
    clearTimeout(timeOutGreenId)
    clearInterval(intervalId)
}

vermelho.addEventListener('click', luzVermelho)
amarelo.addEventListener('click', luzAmarelo)
verde.addEventListener('click', luzVerde)
automatico.addEventListener('click', semaforoAuto)