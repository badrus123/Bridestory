let aray = [2, 4, 1, 6, 8, 2, 4, 9];
let a = [];
for (let i = 0; i < aray.length; i++) {
    if (aray[i] < 5) {
        a.push(aray[i])
    }
}
console.log("Ini array di bawah 5 adalah : "+a);