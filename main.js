var button =  document.querySelectorAll('.button')
var encryptButton = button[0]
var decryptButton = button[1]

encryptButton.onclick = encrypt

function encrypt(){

    changeLeftContent()
}

function changeLeftContent () {
    document.querySelector('.left-content').style.display = 'none'
    document.querySelector('.text-area').style.display = 'block'
    document.querySelector('.text-area input').focus()
}