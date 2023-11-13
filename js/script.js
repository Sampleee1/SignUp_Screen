const inputName = document.querySelector ("#name")
const inputName2 = document.querySelector("#name2")
const inputTel = document.querySelector("#PhoneNumber")
const toggle = document.querySelector(".toggle")
const visibleinv = document.querySelector("#Password")

inputName.addEventListener("keypress", noNumbers) 
inputName2.addEventListener("keypress", noNumbers)
inputTel.addEventListener("keypress", onlynumbers)
toggle.addEventListener("click", hideorsee)


function noNumbers(a) {
    let keyCode = (a.keyCode ? a.keyCode : a.wich)

    if (keyCode > 47 && keyCode < 58 ) {
        a.preventDefault()
    }}

function onlynumbers(a) {
    let keyCode = (a.keyCode ? a.keyCode : a.wich)

    if(keyCode >= 48 && keyCode <= 57)  {
        return true
    } else {a.preventDefault()}
}

function hideorsee() {
    if (visibleinv.type == "password") {
        visibleinv.type = "name"
        toggle.src = "Assets/img/see.png"
    } else {
        toggle.src = "Assets/img/hide.png"
        visibleinv.type = "password"
    }
}