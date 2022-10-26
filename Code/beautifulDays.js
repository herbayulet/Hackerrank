function beautifulDays(i, j, k) {
    // Write your code here
    let hitung = 0;
    for (i; i <= j; i++) {
        let rubah = parseInt(String(i).split("").reverse().join(""));
        if ((i - rubah) % k === 0) {
            hitung++;
        }
    }
    return hitung;
}
console.log(beautifulDays(20, 23, 6));
console.log(beautifulDays(13, 45, 3));
