let running = false
let start = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    running = true
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        time = input.runningTime() - start
    }
    running = false
})
basic.forever(function () {
    if (running) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
