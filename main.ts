/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk
 * Created on: Oct 2025
 * This program shows distance
*/

// variables
let distanceToObject : number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
        basic.showNumber(distanceToObject)
        basic.showIcon(IconNames.Happy)
})
