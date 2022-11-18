const bark = new Audio("../sound/bark.mp3")

// WHEN PRESSED SEND-BUTTON, TEXTFIELD IS RESET AND BARKNOISE IS PLAYED
function sendCont() {
    confirm('Thank you for contacting!')
    document.getElementById("contacttext").value = ""
    bark.play()
}
