const forms_conf = document.getElementById("forms_conf")


function verificarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

// Mostrar img ao dropar a imagem

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
        const maxSize = 200 * 1024
        const type = avatar_foto.files[0].type
        const formats = ["image/jpeg", "image/jpg", "image/png"]

        if(!formats.includes(type)) {
            alert("Formato do arquivo não é permitido! Tente Novamente!")
            return
        }

        if(avatar_foto.files[0].size > maxSize) {
            // alert("Tamanho do arquivo ultrapassou o limite! Tente Novamente")

            const error_photo = document.getElementById("aviso_photo")
            const info = document.getElementById("info_icon")
            const aviso_upload = document.querySelector(".aviso_upload")

            info.classList.toggle("info_error")
            error_photo.textContent = "File too large. Please upload a photo under 500KB."
            aviso_upload.classList.toggle("error")

            setTimeout(() => {
                info.classList.toggle("info_error")
                error_photo.textContent = "Upload your photo (JPG or PNG, max size: 500KB)."
                aviso_upload.classList.toggle("error")
            }, 3000)

            return
        }

        const img_avatar = document.getElementById("foto_avatar")
        img_avatar.style.borderRadius = "10px"
        img_avatar.style.width = "100%"
        img_avatar.src = `assets/images/${avatar_foto.files[0].name}`

        const span_avatar = document.querySelector("#span_avatar")
        span_avatar.style.padding = "0px"

    } 
    // else {
    //     const error_photo = document.getElementById("aviso_photo")
    //     const info = document.getElementById("info_icon")
    //     const aviso_upload = document.querySelector(".aviso_upload")

    //     info.classList.toggle("info_error")
    //     error_photo.textContent = "Por Favor, adicione um arquivo!"
    //     aviso_upload.classList.toggle("error")

    //     setTimeout(() => {
    //         info.classList.toggle("info_error")
    //         error_photo.textContent = "Upload your photo (JPG or PNG, max size: 500KB)."
    //         aviso_upload.classList.toggle("error")
    //     }, 3000)
    // }
    
})

function submitForms() {
    const svg_icon = criarInfoIconSvg()

    const full_name = document.getElementById("full_name").value

    if(full_name == "") {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const container_fullname = document.querySelector(".container_fullname")
        const input_fullname = document.getElementById("full_name")

        div.classList.toggle("error_mensage")
        div.classList.toggle("error")

        input_fullname.classList.toggle("input_error")

        p.textContent = "Please a enter a valid Full Name."
        p.className = "text_error"
        svg_icon.classList.add("img_icon_email")

        div.append(svg_icon, p)
        container_fullname.appendChild(div)
    }

    const email_address = document.getElementById("email_address").value

    if(!verificarEmail(email_address)) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const container_email = document.querySelector(".container_email")
        const input_email = document.getElementById("email_address")

        div.classList.toggle("error_mensage")
        div.classList.toggle("error")

        input_email.classList.toggle("input_error")

        svg_icon.classList.add("img_icon")
        p.textContent = "Please a enter a valid email address."
        p.className = "text_error"
        
        div.append(svg_icon, p)
        container_email.appendChild(div)

        // setTimeout(() => {
        //     container_email.removeChild(div)
        //     input_email.classList.toggle("input_error")
        // }, 3000)
    }

    const github_username = document.getElementById("github_username").value

    if(github_username == "") {
        const div = document.createElement("div")
        const p = document.createElement("p")
        const container_github = document.querySelector(".container_github")
        const input_github = document.getElementById("github_username")

        div.classList.toggle("error_mensage")
        div.classList.toggle("error")

        input_github.classList.toggle("input_error")

        svg_icon.classList.add("img_icon")
        p.textContent = "Please a enter a valid github username."
        p.className = "text_error"
        
        div.append(svg_icon, p)
        container_github.appendChild(div)
    }

    // if() {}

    return [full_name, email_address, github_username]
}

function criarInfoIconSvg() {
    const svgNS = "http://www.w3.org/2000/svg"
    const svg_icon = document.createElementNS(svgNS, "svg")

    svg_icon.setAttribute("width", "16")
    svg_icon.setAttribute("height", "16")
    svg_icon.setAttribute("viewBox", "0 0 16 16")
    svg_icon.setAttribute("fill", "none")

    const path1 = document.createElementNS(svgNS, "path")

    path1.setAttribute("stroke", "#D1D0D5")
    path1.setAttribute("stroke-linecap", "round")
    path1.setAttribute("stroke-linejoin", "round")
    path1.setAttribute("d", "M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z")
    svg_icon.appendChild(path1)

    const path2 = document.createElementNS(svgNS, "path")

    path2.setAttribute("fill", "#D1D0D5")
    path2.setAttribute("d", "M8.004 10.462V7.596ZM8 5.57v-.042Z")
    svg_icon.appendChild(path2)

    const path3 = document.createElementNS(svgNS, "path")

    path3.setAttribute("stroke", "#D1D0D5")
    path3.setAttribute("stroke-linecap", "round")
    path3.setAttribute("stroke-linejoin", "round")
    path3.setAttribute("d", "M8.004 10.462V7.596M8 5.569v-.042")
    svg_icon.appendChild(path3)

    return svg_icon
}

function ticket() {
    const [full_name, email_address, github_username] = submitForms()

    const ticket_avatar = document.querySelector(".ticket_avatar")

    if(!avatar_foto.files.length > 0) {
        alert("Adicione um arquivo!")
    } else {
        ticket_avatar.src = `assets/images/${avatar_foto.files[0].name}`
    }


    const span_name = document.querySelector(".span_name")
    const name_ticket = document.querySelector(".name")

    span_name.textContent = full_name
    name_ticket.textContent = full_name

    const span_email = document.querySelector(".span_email")
    const github_account = document.querySelector(".github_account")

    span_email.textContent = email_address
    github_account.textContent = github_username

    const forms_container = document.querySelector(".forms_container")
    const container_ticket = document.querySelector(".container")

    forms_container.classList.toggle("hidden")
    container_ticket.classList.toggle("hidden")
}

forms_conf.addEventListener('submit', (event) => {
    event.preventDefault()

    ticket()
})