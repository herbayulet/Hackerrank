function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let nilaiMax = -1;
    for (let drive of drives) {
        for (let keyboard of keyboards) {
            // console.log("ini drive", drive);
            // console.log("ini key", keyboard);
            let biaya = drive + keyboard;
            // console.log("ini biaya", biaya);
            if (biaya > nilaiMax && biaya <= b) {
                nilaiMax = biaya;
            }
        }
    }
    return nilaiMax;
}
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
