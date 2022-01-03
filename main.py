def on_gesture_tilt_left():
    serial.write_value("zq", open2)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_a():
    global deley
    basic.show_icon(IconNames.YES)
    deley += 10
    serial.write_value("a", deley)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    serial.write_value("zd", open2)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_free_fall():
    serial.write_value("zylt", open2)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_button_pressed_b():
    global deley
    basic.show_icon(IconNames.NO)
    deley += -10
    serial.write_value("b", deley)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_three_g():
    serial.write_value("3g", open2)
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)

def on_gesture_tilt_right():
    serial.write_value("yq", open2)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

open2 = 0
deley = 0
serial.redirect_to_usb()
serial.set_tx_buffer_size(64)
deley = 10
basic.show_icon(IconNames.HEART)

def on_forever():
    led.set_brightness(input.sound_level())
    serial.write_value("znz", input.compass_heading())
    basic.pause(deley)
    serial.write_value("cx", input.magnetic_force(Dimension.X))
    basic.pause(deley)
    serial.write_value("cy", input.magnetic_force(Dimension.Y))
    basic.pause(deley)
    serial.write_value("cz", input.magnetic_force(Dimension.Z))
    basic.pause(deley)
    serial.write_value("jx", input.acceleration(Dimension.X))
    basic.pause(deley)
    serial.write_value("jy", input.acceleration(Dimension.Y))
    basic.pause(deley)
    serial.write_value("jz", input.acceleration(Dimension.Z))
    basic.pause(deley)
    serial.write_value("jqd", input.acceleration(Dimension.STRENGTH))
    basic.pause(deley)
    serial.write_value("ld", input.light_level())
basic.forever(on_forever)
