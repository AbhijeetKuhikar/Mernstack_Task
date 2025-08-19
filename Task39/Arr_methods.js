let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();


let nums = [10, 20, 30, 40, 30];
console.log(nums.includes(20)); 
console.log(nums.indexOf(30));     
console.log(nums.lastIndexOf(30)); 
console.log(nums.find(n => n > 25));      
console.log(nums.findIndex(n => n > 25));


let arr2 = [1, 2, 3, 4];
console.log(arr2.map(x => x * 2));   
console.log(arr2.filter(x => x % 2)); 
console.log(arr2.reduce((a, b) => a + b, 0));
arr2.forEach(x => console.log(x)); 


let a = [1, 2], b = [3, 4];
console.log(a.concat(b));

let arr3 = [10, 20, 30, 40, 50];
console.log(arr3.slice(1, 3));

arr3.splice(2, 1, 99);
console.log(arr3);


let arr4 = [3, 1, 5, 2];
console.log(arr4.sort());
console.log(arr4.reverse()); 
arr4.sort((a, b) => a - b);


let arr5 = ["a", "b", "c"];
console.log(arr5.join("-"));

let str = "hello world";
console.log(str.split(" "));