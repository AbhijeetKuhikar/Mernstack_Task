let str = "hello world";
let uniqueChars = "";
for (let i = 0; i < str.length; i++) {
    if (uniqueChars.indexOf(str[i]) === -1) {
        uniqueChars += str[i];
    }
}
console.log("Original string:", str);
console.log("Unique characters:", uniqueChars);
