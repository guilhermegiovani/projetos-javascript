const forms_conf = document.getElementById("forms_conf")


function verificarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email)
}

function verificarGitHub(github) {
    const githubRegex = /^@[A-Za-z]+$/

    return githubRegex.test(github)
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
        const maxSize = 500 * 1024
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
    
})

function submitForms() {
    // const svg_icon = criarInfoIconSvg()
    const icon_error_name = criarInfoIconSvg()
    const icon_error_email = criarInfoIconSvg()
    const icon_error_github = criarInfoIconSvg()

    if(!avatar_foto.files.length > 0) {
        const error_photo = document.getElementById("aviso_photo")
        const info = document.getElementById("info_icon")
        const aviso_upload = document.querySelector(".aviso_upload")

        info.classList.add("info_error")
        error_photo.textContent = "ERROR! Please add a valid photo!"
        aviso_upload.classList.add("error")

        const divUploadAvatar = document.querySelector(".upload_avatar")

        divUploadAvatar.addEventListener('click', () => {
            info.classList.remove("info_error")
            error_photo.textContent = "Upload your photo (JPG or PNG, max size: 500KB)."
            aviso_upload.classList.remove("error")
        })
    }

    const full_name = document.getElementById("full_name").value

    if(full_name.trim() === "") {
        const container_fullname = document.querySelector(".container_fullname")
        const input_fullname = document.getElementById("full_name")

        if(!container_fullname.querySelector("div")) {
            const div = document.createElement("div")
            const p = document.createElement("p")

            div.classList.toggle("error_mensage")
            div.classList.toggle("error")

            icon_error_name.classList.add("img_icon")
            p.textContent = "Please a enter a valid Full Name."
            p.className = "text_error"

            div.append(icon_error_name, p)
            container_fullname.appendChild(div)

            input_fullname.classList.add("input_error")
    
            input_fullname.addEventListener("click", () => {
                container_fullname.removeChild(div)
                input_fullname.classList.toggle("input_error")
            })
        }


    }

    const email_address = document.getElementById("email_address").value

    if(!verificarEmail(email_address)) {
        const container_email = document.querySelector(".container_email")
        const input_email = document.getElementById("email_address")

        if(!container_email.querySelector("div")) {
            const div = document.createElement("div")
            const p = document.createElement("p")

            div.classList.toggle("error_mensage")
            div.classList.toggle("error")

            icon_error_email.classList.add("img_icon")
            p.textContent = "Please a enter a valid email address."
            p.className = "text_error"

            div.append(icon_error_email, p)
            container_email.appendChild(div)

            input_email.classList.add("input_error")

            input_email.addEventListener("click", () => {
                container_email.removeChild(div)
                input_email.classList.toggle("input_error")
            })
        }

    }

    const github_username = document.getElementById("github_username").value

    if(!verificarGitHub(github_username)) {
        const container_github = document.querySelector(".container_github")
        const input_github = document.getElementById("github_username")

        if(!container_github.querySelector("div")) {
            const div = document.createElement("div")
            const p = document.createElement("p")

            div.classList.toggle("error_mensage")
            div.classList.toggle("error")

            icon_error_github.classList.add("img_icon")
            p.textContent = "Please a enter a valid github username."
            p.className = "text_error"

            div.append(icon_error_github, p)
            container_github.appendChild(div)

            input_github.classList.add("input_error")

            input_github.addEventListener("click", () => {
                container_github.removeChild(div)
                input_github.classList.toggle("input_error")
            })
        }
        
    }

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

    if(avatar_foto.files.length > 0 && full_name != "" && email_address != "" && github_username != "") {
        ticket_avatar.src = `assets/images/${avatar_foto.files[0].name}`
        ticket_avatar.style.width = "60px"
        ticket_avatar.style.height = "60px"

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

        const circle_top = document.querySelector(".circle_top")
        circle_top.style.left = "58px"

        const circle_center = document.querySelector(".circle_center")
        circle_center.style.top = "403px"

        forms_container.classList.toggle("hidden")
        container_ticket.classList.toggle("hidden")
    }

}

forms_conf.addEventListener('submit', (event) => {
    event.preventDefault()

    ticket()
})