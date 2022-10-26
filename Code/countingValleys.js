function countingValleys(steps, path) {
    // Write your code here
    let valleyCounter = 0; // Hitung Valley nya
    let altitude = 0; // Mentrigger setiap ada huruf "U" akan bertambah
    for (let i = 0; i < steps; i++) {
        let char = path.charAt(i); // untuk mendapatkan setiap huruf dalam path
        // kondisi untuk mencari huruf yang sama dengan "U"
        if (char === "U") {
            altitude++;

            if (altitude === 0) {
                valleyCounter++;
            }
        } else {
            // kalo huruf bukan U maka bakal berkurang
            altitude--;
        }
    }

    return valleyCounter;
}
console.log(countingValleys(8, "UDDDUDUU"));
