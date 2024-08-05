const form = document.querySelector("form");
const input = document.querySelector("input");
const alertIng = document.querySelector("span img");
const alertMsg = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(input.value == "") {
        alert();
        return (alertMsg.innerHTML = "Please fill in your email");
    }
    if (!input.value.match(pattern)) {
        alert();
        return (alertMsg.innerHTML = 'Please provide a valid email');
    }

    return alert ("Thank you filling in your email");
});

function alert() {
    input.style.borderColor = "hsl(0, 93%, 68%)";
    alertImg.style.display = "block";
    alertMsg.style.display = "block";
}

function clearalert() {
    input.style.borderColor = 'hsl(0, 36%, 70%, 50%)';
    alertImg.style.display = 'none';
    alertMsg.style.display = 'none';
}

input.addEventListener("keypress", () => {
    clearalert();
})