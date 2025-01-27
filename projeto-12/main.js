const forms_conf = document.getElementById("forms_conf")


function verificarEmail(email) {
    const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

    return emailRegex.test(email)
}

const upload_avatar = document.querySelector(".upload_avatar")

function onEnter(event) {
    event.preventDefault()
    upload_avatar.classList.add("active")
}

function onLeave() {
    upload_avatar.classList.remove("active")
}

upload_avatar.addEventListener("dragover", onEnter)
upload_avatar.addEventListener("dragleave", onLeave)
upload_avatar.addEventListener("dragend", onLeave)
upload_avatar.addEventListener("drop", (event) => {
    event.preventDefault()
    
    onLeave()
})

const avatar_foto = document.getElementById("upload_avatar")

avatar_foto.addEventListener('change', (event) => {
    event.preventDefault()

    if(avatar_foto.files.length > 0) {
        console.log(avatar_foto.files)

        const maxSize = 500 * 1024
        const type = avatar_foto.files[0].type
        const formats = ["image/jpeg", "image/jpg", "image/png"]

        if(!formats.includes(type)) {
            alert("Formato do arquivo não é permitido! Tente Novamente!")
            return
        }

        if(avatar_foto.files[0].size > maxSize) {
            alert("Tamanho do arquivo ultrapassou o limite! Tente Novamente")
            return
        }

        const img_avatar = document.getElementById("foto_avatar")
        img_avatar.src = `assets/images/${avatar_foto.files[0].name}`

        img_avatar.style.borderRadius = "10px"
        img_avatar.style.width = "100%"
        document.querySelector("#span_avatar").style.padding = "0px"
    }
    
})

function submitForms() {
    const full_name = document.getElementById("full_name").value
    const email_address = document.getElementById("email_address").value
    const github_username = document.getElementById("github_username").value
    return [full_name, email_address, github_username]
}

// function ticket() {
//     const [avatar_foto, full_name, email_address, github_username] = submitForms()

//     console.log(full_name)
//     console.log(email_address)
//     console.log(github_username)
// }

// forms_conf.addEventListener('submit', (event) => {
//     event.preventDefault()

//     ticket()
// })