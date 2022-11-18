const bark = new Audio("../sound/bark.mp3")

function sendCont() {
    confirm('Thank you for contacting!')
    document.getElementById("contacttext").value = ""
    bark.play()
}
