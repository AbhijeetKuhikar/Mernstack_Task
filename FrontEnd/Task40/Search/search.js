function linearSerach(arr, search) {
    let flag = false
    let steps = 0
    for (let index = 0; index < arr.length; index++) {
        steps++
        if (arr[index] === search) {
            flag = true
        }
        if (flag) {
            return `element ${search} found at position ${index + 1} in ${steps} steps`
        }
    }
    return `element ${search} not found at any position in ${steps} steps`
}

function binarySearch(arr, search) {
    let ub = arr.length - 1
    let lb = 0
    let steps = 0
    while (lb <= ub) {
        steps++
        let midpoint = parseInt((ub + lb) / 2)

        if (arr[midpoint] === search) {
            return `element ${search} found at position ${midpoint + 1} in ${steps} steps`
        }

        if (arr[midpoint] < search) {
            lb = midpoint + 1
        } else {
            ub = midpoint - 1
        }
    }
    return `element ${search} not found any positon in ${steps} steps !`
}

let numbers = [21,22,23,24,25,26,27,28,29,30];
let names = ["abhijeet", "shrujal", "shantanu", "aachal", "ayushi"];
console.log(linearSerach(numbers, 29));
console.log(binarySearch(numbers, 29));
console.log(linearSerach(names, "ayushi"));
console.log(binarySearch(names, "ayushi"));
console.log(binarySearch(names, "abhijeet"));