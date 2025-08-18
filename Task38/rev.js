function revString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let str1 = "hello";
console.log("Original: " + str1);
console.log("Reversed: " + revString(str1));

let str2 = "Whatsapp";
console.log("Original: " + str2);
console.log("Reversed: " + revString(str2));