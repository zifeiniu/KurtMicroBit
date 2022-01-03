input.onGesture(Gesture.TiltLeft, function () {
    serial.writeValue("zq", open2)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    deley += 10
    serial.writeValue("a", deley)
})
input.onGesture(Gesture.Shake, function () {
    serial.writeValue("zd", open2)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
    serial.writeValue("zylt", open2)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    serial.writeValue("b", deley)
})
input.onGesture(Gesture.ThreeG, function () {
    serial.writeValue("3g", open2)
})
input.onGesture(Gesture.TiltRight, function () {
    serial.writeValue("yq", open2)
})
let open2 = 0
let deley = 0
serial.redirectToUSB()
serial.setTxBufferSize(64)
deley = 0
basic.showIcon(IconNames.Heart)
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
    serial.writeValue("ld", input.lightLevel())
    basic.pause(deley)
    serial.writeValue("wd", input.temperature())
    basic.pause(deley)
})
