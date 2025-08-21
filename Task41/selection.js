function selectionSort(arr, order = "A") {
    let steps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            steps++;

            if (order === "A") {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            } else {                
                if (arr[j] > arr[minIndex]) {
                    minIndex = j;
                }
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return { arr, order, steps };
}
let numbers = [64, 25, 12, 22, 11];
console.log("Ascending:", selectionSort([...numbers], "A"));  
console.log("Descending:", selectionSort([...numbers], "D"));


