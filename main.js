// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const button =  document.querySelectorAll('.button')
const input = document.querySelector('.text-bar input')
let text
const output = document.querySelector('.text-area textarea')
const encryptButton = button[0]
const decryptButton = button[1]

input.focus()
encryptButton.onclick = encrypt
decryptButton.onclick = decrypt


function encrypt(){
    text = input.value
    let encrypt = output.value = text.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
    text = encrypt

    if(text != ''){
        changeLeftContent()
    } else{
        document.querySelector('.left-content').style.display = 'block'
        document.querySelector('.text-area').style.display = 'none'
    }
    
}

function decrypt() {
    let decrypt = text.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,"a").replace(/ober/g,'o').replace(/ufat/g,'u')
    output.value = decrypt
    
}

function changeLeftContent () {
    document.querySelector('.left-content').style.display = 'none'
    document.querySelector('.text-area').style.display = 'flex'
    document.querySelector('.text-area textarea').focus()
}