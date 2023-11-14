const inputName = document.querySelector ("#name")
const inputName2 = document.querySelector("#name2")
const inputTel = document.querySelector("#PhoneNumber")
const toggle = document.querySelector(".toggle")
const password = document.querySelector("#Password")
const form = document.querySelector("#form")

inputName.addEventListener("keypress", noNumbers) 
inputName2.addEventListener("keypress", noNumbers)
inputTel.addEventListener("keypress", onlynumbers)
toggle.addEventListener("click", hideorsee)
form.addEventListener("submit", validation)


function noNumbers(a) {
    let keyCode = (a.keyCode ? a.keyCode : a.wich)

    if (keyCode > 47 && keyCode < 58 ) {
        a.preventDefault()
    }}

function onlynumbers(e) {
    let keyCode = (e.keyCode ? e.keyCode : e.wich)

    if(keyCode >= 48 && keyCode <= 57)  {
        return true
    } else {e.preventDefault()}
}

function hideorsee() {
    if (password.type == "password") {
        password.type = "name"
        toggle.src = "Assets/img/see.png"
    } else {
        toggle.src = "Assets/img/hide.png"
        password.type = "password"
    }
}

function validation(a) {
    if (password.value.length < 8) {
        a.preventDefault()
        alert("Use a password with 8 or more characters")
    }
}