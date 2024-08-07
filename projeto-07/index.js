// import "index.css";

const btnCalc = document.getElementById("btnCalc")
const inputName = document.getElementById("name")
const inputHeight = document.getElementById("height")
const inputWeight = document.getElementById("weight")


btnCalc.addEventListener('click', (e) => {
    e.preventDefault()

    if(inputName !== "" && inputHeight !== "" && inputWeight !== "") {
        const resultImc = (inputWeight.value / (inputHeight.value * 2)).toFixed(2)
        // const resultImc = parseFloat(calcularImc.toFixed(2))
        let divResultImc = document.getElementById("resultImc")

        if(resultImc < 18.5) {
            divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está abaixo do peso</p>`
        } else if(resultImc < 25) {
            divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está no seu peso normal</p>`
        } else if(resultImc < 30) {
            divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com sobrepeso</p>`
        } else if(resultImc < 35) {
            divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com obesidade grau 1</p>`
        } else if(resultImc < 40) {
            divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com obesidade grau 2</p>`
        } else {
            divResultImc.innerHTML = `<p>${inputName.value} seu IMC é ${resultImc} e você está com obesidade grau 3</p>`
        }

    } else {
        alert("Preencha todos os campos!!!")
    }


})