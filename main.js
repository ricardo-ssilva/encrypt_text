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

input.focus()
encryptButton.onclick = encrypt
decryptButton.onclick = decrypt


function encrypt(){
    let text = input.value
    let encrypt = text.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
    // console.log(encrypt)
    output.value = encrypt
    // console.log('input', input.value)
    

    // changeLeftContent ()
    checkText (text)
    
}

function decrypt() {
    let text = input.value
    let decrypt = text.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,"a").replace(/ober/g,'o').replace(/ufat/g,'u')
    output.value = decrypt
    changeLeftContent ()
    
}

function changeLeftContent () {
    document.querySelector('.left-content').style.display = 'none'
    document.querySelector('.text-area').style.display = 'flex'
    document.querySelector('.text-area textarea').focus()
}

function checkText(text) {
    const check = text.search(/^[a-z ]+$/) //validação regex
    console.log(check)
    if(text != '') {
        if(check == -1){
            alert('Erro: Valido somente caracteres minúsculos e sem acentos')
               document.querySelector('.left-content').style.display = 'block'
               document.querySelector('.text-area').style.display = 'none'
               text = ''
               document.querySelector('.msg').innerHTML = 'Valido somente caracteres minúsculos e sem acentos'
        } else {
            changeLeftContent()
        }
    } else {
        alert('Erro: Nenhuma mensagem foi encontrada')
        document.querySelector('.left-content').style.display = 'block'
        document.querySelector('.text-area').style.display = 'none'
    } 
}