input.onGesture(Gesture.TiltLeft, function () {
    serial.writeValue("zq", open)
})
input.onButtonPressed(Button.A, function () {
    serial.writeValue("a", open)
})
input.onGesture(Gesture.Shake, function () {
    serial.writeValue("zd", open)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
input.onGesture(Gesture.FreeFall, function () {
    serial.writeValue("zylt", open)
})
input.onButtonPressed(Button.B, function () {
    serial.writeValue("b", open)
})
input.onGesture(Gesture.ThreeG, function () {
    serial.writeValue("3g", open)
})
input.onGesture(Gesture.TiltRight, function () {
    serial.writeValue("yq", open)
})
let open = 0
serial.redirectToUSB()
let deley = 50
basic.forever(function () {
    serial.writeValue("znz", input.compassHeading())
    basic.pause(deley)
    serial.writeValue("cx", input.magneticForce(Dimension.X))
    basic.pause(deley)
    serial.writeValue("cy", input.magneticForce(Dimension.Y))
    basic.pause(deley)
    serial.writeValue("cz", input.magneticForce(Dimension.Z))
    basic.pause(deley)
    serial.writeValue("jx", input.acceleration(Dimension.X))
    basic.pause(deley)
    serial.writeValue("jy", input.acceleration(Dimension.Y))
    basic.pause(deley)
    serial.writeValue("jz", input.acceleration(Dimension.Z))
    basic.pause(deley)
    serial.writeValue("jqd", input.acceleration(Dimension.Strength))
    basic.pause(deley)
})
