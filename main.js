// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

var button =  document.querySelectorAll('.button')
var input = document.querySelector('.text-bar input')
input.focus()
var inputValue
var output = document.querySelector('.text-area textarea')
var outputValue  

var encryptButton = button[0]
var decryptButton = button[1]

encryptButton.onclick = encrypt


function encrypt(){
    inputValue = input.value
    outputValue = output.value = inputValue

    changeLeftContent()
}

function changeLeftContent () {
    document.querySelector('.left-content').style.display = 'none'
    document.querySelector('.text-area').style.display = 'flex'
    document.querySelector('.text-area textarea').focus()
}