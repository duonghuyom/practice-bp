// Cach 1
const calculate = [
    { 5: [10, 20] },
    { 10: [20, 30] },
    { 15: [30, 40] },
    { 20: [40, 50] },
    { 25: [50, 60] },
    { 30: [60, 70] },
    { 35: [70, 80] },
    { 100: [] }
]

function tinhHeight(h) {
    for (let i = 0; i < this.calculate.length; i++) {
        if (h > Object.values(calculate[i])[0][0] && h < Object.values(calculate[i])[0][1]) {
            return console.log(Object.keys(calculate[i]).toString())
        }
        // return console.log(Object.keys(calculate[calculate.length - 1]).toString())
    }
}

tinhHeight(78)

// Cach 2
function calculateHeight(n) {
    return (n > 10 && n < 20) ? 5 : (n > 20 && n < 30) ? 10 : (n > 30 && n < 40) ? 15 : (n > 40 && n < 50) ? 20 : 'noob'
}

console.log(calculateHeight(10))