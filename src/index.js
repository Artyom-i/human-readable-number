module.exports = function toReadable (number) {

        const numberStr = number.toFixed()

        const arrTo20 = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]

        const arrTo90 = [,,"twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]

        if (number < 20) {
            return arrTo20[number]
        }

        if (numberStr.length === 2) {
            if (numberStr[1] == 0) {
                return arrTo90[numberStr[0]]
            }
            return arrTo90[numberStr[0]] + ' ' + arrTo20[numberStr[1]]
        }

        if (numberStr.length === 3) {
            if (numberStr[1] == 0 && numberStr[2] == 0 ) {
                return arrTo20[numberStr[0]] + ' hundred'
            }
            if (numberStr[1] + numberStr[2] < 20) {
                return arrTo20[numberStr[0]] + ' hundred ' + arrTo20[+(numberStr[1] + numberStr[2])]
            }
            if (numberStr[2] == 0) {
                return arrTo20[numberStr[0]] + ' hundred ' + arrTo90[numberStr[1]]
            }
            return arrTo20[numberStr[0]] + ' hundred ' + arrTo90[numberStr[1]] + ' ' + arrTo20[numberStr[2]]
        }
}
