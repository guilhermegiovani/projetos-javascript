// import "index.css";

const imcForm = document.getElementById("imcForm")
const inputName = document.getElementById("name")
const inputHeight = document.getElementById("height")
const inputWeight = document.getElementById("weight")
const divResultImc = document.getElementById("resultImc")

imcForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const calcularImc = inputWeight.value / (inputHeight.value * 2)
    const resultImc = parseFloat(calcularImc.toFixed(2))

    if(resultImc < 18,5) {
        divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está abaixo do peso</p>`
    } else if(resultImc > 18,5 && resultImc < 25) {
        divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está no seu peso normal</p>`
    } else if(resultImc > 25 && resultImc < 30) {
        divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com sobrepeso</p>`
    } else if(resultImc > 30 && resultImc < 35) {
        divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com obesidade grau 1</p>`
    } else if(resultImc > 35 && resultImc < 40) {
        divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com obesidade grau 2</p>`
    } else {
        divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com obesidade grau 3</p>`
    }

})