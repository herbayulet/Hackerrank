function angryProfessor(k, a) {
    // Write your code here
    let hitung = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            hitung += 1;
        }
    }

    return hitung >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
