const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lamp")

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()) {
        lamp.src = "./img/ligada.jpg"

        turnOn.classList.add("hiden")
        turnOff.classList.remove("hiden")
    }
}

function lampOff() {
    if(!isLampBroken()) {
        lamp.src = "./img/desligada.jpg"

        turnOff.classList.add("hiden")
        turnOn.classList.remove("hiden")
    }
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg"

    turnOff.classList.add("hiden")
    turnOn.classList.add("hiden")
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
