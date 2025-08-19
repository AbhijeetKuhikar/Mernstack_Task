function mySplice(arr, start, deleteCount, ...items) {
    let removed = [];
    for (let i = 0; i < deleteCount; i++) {
        removed[i] = arr[start + i];
    }
    let remaining_string = [];
    for (let i = start + deleteCount; i < arr.length; i++) {
        remaining_string.push(arr[i]);
    }

    arr.length = start;
    for (let i = 0; i < items.length; i++) {
        arr[arr.length] = items[i];
    }

    for (let i = 0; i < remaining_string.length; i++) {
        arr[arr.length] = remaining_string[i];
    }
    return removed; 
}

let numbers = [10, 20, 30, 40, 50];
console.log(mySplice(numbers, 2, 2, 99, 100));
console.log(mySplice(numbers, 1, 1));

let numbers1 = [60, 40, 80, 65, 90, 100];
console.log(mySplice(numbers1, 2, 2, 99, 100));
console.log(mySplice(numbers1, 1, 1));