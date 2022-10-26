function catsAndMouse(x, y, z) {
    // Write your code here
    let kucingA = x;
    let kucingB = y;
    let tikus = z;
    let posKucingA = Math.abs(tikus - kucingA);
    let posKucingB = Math.abs(tikus - kucingB);
    if (posKucingA < posKucingB) {
        return "Cat A";
    } else if (posKucingB < posKucingA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
console.log(catsAndMouse(2, 6, 3));
