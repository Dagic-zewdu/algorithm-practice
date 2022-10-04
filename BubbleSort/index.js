const { swap } = require("../Utils/index")

const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1])
                arr = swap(arr, j, j + 1)
        }
    }
    return arr
}

console.log(bubbleSort([3, 1, 10, 2, 4, 9, 11, 5, 6]))