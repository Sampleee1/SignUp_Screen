const inputName = document.querySelector ("#name")
const inputName2 = document.querySelector("#name2")
const inputTel = document.querySelector("#PhoneNumber")

inputName.addEventListener("keypress", noNumbers) 
inputName2.addEventListener("keypress", noNumbers)
inputTel.addEventListener("keypress", onlynumbers)


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