let reading = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    reading = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P0, 1023)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (reading))
    }
    basic.pause(100)
})
