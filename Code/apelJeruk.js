function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    console.log(apples.map((apple) => a + apple).filter((apple) => apple >= s && apple <= t).length);
    console.log(oranges.map((orange) => b + orange).filter((orange) => orange >= s && orange <= t).length);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
