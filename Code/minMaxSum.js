function miniMaxSum(arr) {
    // Write your code here
    let total = arr.reduce((a, b) => a + b);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log(`${total - max} ${total - min}`);
}
miniMaxSum([1, 2, 3, 4, 5]);
