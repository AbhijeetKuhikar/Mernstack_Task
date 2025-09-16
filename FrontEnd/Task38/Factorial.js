const factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
};


let number = 5;
console.log(factorial(6));//method 1
console.log(`Factorial of ${number} is: ${factorial(number)}`);//method 2 must Follow
