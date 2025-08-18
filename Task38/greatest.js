const findBig = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};
let num1 = 1
let num2 = 4
let num3 = 2
console.log("The biggest number is: " + findBig(num1, num2, num3));
console.log(`The biggest number is: ${findBig(num1, num2, num3)}`);