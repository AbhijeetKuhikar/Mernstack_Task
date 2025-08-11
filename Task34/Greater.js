let a = 50
let b = 50
let c = 50
let d = 51

if ((a > b) && (a > c) && (a > d)) {
    console.log('a is greater than b, c & d !')
} else if ((b > c) && (b > d)) {
    console.log('b is greater than a a, c & d !')
} else if (c > d) {
    console.log('c is greater than a , b & d !')
} else {
    console.log('d is greater than a , b & c !')
}