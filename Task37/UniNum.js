let str = "Hello world";
let result = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result.indexOf(char) === -1) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === char) {
                count++;
            }
        }
        result += char + count;
    }
}
console.log("Original string:", str);
console.log("Updated string:", result);
