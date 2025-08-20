function bubbleSort(arr, order) {
    let steps = 0
    let swap = true
    for (let i = 0; i < arr.length; i++) {
        swap = false
        for (let j = 0; j < arr.length - i; j++) {
            steps++
            if (order == "A") {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    swap = true
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    swap = true
                }
            }
        }
        if (!swap) {
            return `sort array is [${arr}] in ${steps} steps`
        }
    }
    return `sort array is [${arr}] in ${steps} steps`
}
console.log(bubbleSort([2,10,13,5,4,3,0,22,11,15,10],"A"));
console.log(bubbleSort([2,10,13,5,4,3,0,22,11,15,10],"D"));
console.log(bubbleSort(["ab", "am", "aa", "ar"],"A"));
console.log(bubbleSort(["shrujal", "abhishek", "archana", "aastha"],"D"));