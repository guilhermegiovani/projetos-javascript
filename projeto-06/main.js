// verificação de email

function emailValido(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email)
}

const emailForm = document.getElementById("emailForm")

emailForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const emailInput = document.getElementById("emailInput").value
    const messageElement = document.getElementById("mensagem")

    if(emailValido(emailInput)) {
        
        messageElement.textContent = "E-mail válido!"
        messageElement.className = "success"

        if(messageElement.className != "hidden") {}

        setTimeout(() => {
            messageElement.classList.toggle("hidden")
        }, 3000)
    } else {
        messageElement.textContent = "Please provide a valid email address"
        messageElement.className = "error"

        setTimeout(() => {
            messageElement.classList.toggle("hidden")
        }, 3000)
    }
})