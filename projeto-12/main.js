const forms_conf = document.getElementById("forms_conf")


function verificarEmail(email) {
    const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

    return emailRegex.test(email)
}

// function fotoAvatar() {
//     const avatar_foto = document.getElementById("upload_avatar").value

//     // https://www.youtube.com/watch?v=Gc5dhlbmdLI - como mostrar img no input

//     if(avatar_foto.files.length != 0) {
//         const img_avatar = document.getElementById("foto_avatar")

//         img_avatar.src = "assets/images/image-avatar.jpg"
//     }
// }

// fotoAvatar()

function submitForms() {
    // const avatar_foto = document.getElementById("upload_avatar").value
    const full_name = document.getElementById("full_name").value
    const email_address = document.getElementById("email_address").value
    const github_username = document.getElementById("github_username").value
    return [avatar_foto, full_name, email_address, github_username]
}

function ticket() {
    const [avatar_foto, full_name, email_address, github_username] = submitForms()

    console.log(full_name)
    console.log(email_address)
    console.log(github_username)
}

forms_conf.addEventListener('submit', (event) => {
    event.preventDefault()

    ticket()
})