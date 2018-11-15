let lastTimeChecked = 0
let timerLength = 0
let isInfected = false
input.onButtonPressed(Button.AB, function () {
    infect()
})
function infect() {
    isInfected = true
    basic.showIcon(IconNames.Sad)
}
function die2() {
    basic.showIcon(IconNames.Skull)
}
radio.onReceivedString(function (receivedString) {
    if (isInfected == true) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -65) {
            radio.sendString("You are infected")
        }
    } else {
        if (receivedString == "You are infected") {
            infect()
        }
    }
})
isInfected = false
radio.setGroup(1)
radio.setTransmitPower(4)
basic.showIcon(IconNames.Happy)
lastTimeChecked = input.runningTime()
basic.forever(function () {
    radio.sendString("I am here")
})
