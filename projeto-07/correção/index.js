
const btnCalcular = document.getElementById("calcular")


function imc() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultadoDiv = document.getElementById("resultado")

    if(nome !== "" && altura !== "" && peso !== "") {
        const valorImc = (peso / (altura * 2)).toFixed(2)

        let classificacao = ""

        if(valorImc < 18.5) {
            classificacao = "abaixo do peso."
        } else if(valorImc < 25) {
            classificacao = "com peso ideal. Parabens!!!"
        } else if(valorImc < 30) {
            classificacao = "levemente acima do peso."
        } else if(valorImc < 35) {
            classificacao = "com obesidade grau I."
        } else if(valorImc < 40) {
            classificacao = "com obesidade grau II."
        } else {
            classificacao = "com obesidade grau III. Cuidado!"
        }

        resultadoDiv.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`
    } else {
        resultadoDiv.textContent = "Preencha todos os campos!!!"
    }

}

btnCalcular.addEventListener('click', imc)