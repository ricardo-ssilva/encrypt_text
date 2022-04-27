// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const button =  document.querySelectorAll('.button')
const input = document.querySelector('.text-bar input')
const output = document.querySelector('.text-area textarea')
const encryptButton = button[0]
const decryptButton = button[1]
const copyButton = button[2]

input.focus()
encryptButton.onclick = encrypt
decryptButton.onclick = decrypt
copyButton.onclick = copyText

function encrypt(){
    let text = input.value
    let encrypt = text.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
    output.value = encrypt
    checkText(text)
}
function decrypt() {
    let text = input.value
    let decrypt = text.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,"a").replace(/ober/g,'o').replace(/ufat/g,'u')
    output.value = decrypt
    checkText(text)
}
function changeLeftContent (display1, display2) {
    document.querySelector('.left-content').style.display = display1
    document.querySelector('.text-area').style.display = display2
    document.querySelector('.text-area textarea').focus()
}
function checkText(text) {
    const check = text.search(/^[a-z ]+$/) //validação regex
    if(text != '') {
        if(check == -1){
            errorMessage('Somente caracteres minúsculos e sem acentos são válidos')
        } else {
            changeLeftContent('none','flex')
        }
    } else {
       errorMessage('Nenhuma mensagem foi encontrada')
    } 
}
function errorMessage (msg) {
    alert(`Erro: ${msg}`)
    changeLeftContent('block','none')
    document.querySelector('.msg').innerHTML = msg
}
function copyText() {
    let copyText = output.value
    navigator.clipboard.writeText(copyText)
    console.log(copyText)
}