function blink () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
// test colors
function color_lists () {
    list = [
    neopixel.colors(NeoPixelColors.Red),
    neopixel.colors(NeoPixelColors.Orange),
    neopixel.colors(NeoPixelColors.Yellow),
    neopixel.colors(NeoPixelColors.Green),
    neopixel.colors(NeoPixelColors.Blue),
    neopixel.colors(NeoPixelColors.Indigo),
    neopixel.colors(NeoPixelColors.Violet),
    neopixel.colors(NeoPixelColors.Purple),
    neopixel.colors(NeoPixelColors.White),
    neopixel.colors(NeoPixelColors.Black)
    ]
    text_list = [
    "R",
    "O",
    "Y",
    "G",
    "B",
    "I",
    "V",
    "P",
    "W",
    ""
    ]
    for (let index = 0; index <= list.length; index++) {
        strip.showColor(list[index])
        basic.showString("" + (text_list[index]))
        basic.pause(1000)
    }
}
let text_list: string[] = []
let list: number[] = []
let strip: neopixel.Strip = null
basic.showIcon(IconNames.SmallSquare)
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
blink()
basic.forever(function () {
    // In rbg format
    // green - 255 0 0 
    // red - 0 255 0
    // none - 0 0 255
    // 
    // yellow - 255 255 0
    // orange - 128 255 0
    strip.showColor(neopixel.rgb(0, 0, 255))
    basic.pause(1000)
})
