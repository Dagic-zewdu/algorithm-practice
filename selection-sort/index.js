const { swap } = require('../Utils')

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (j = i+1; j < arr.length;j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if(min !== i)
          swap(arr,i,min) 
    }
    return arr
}

console.log(selectionSort([4, 2, 6, 1, 8, 5, 10, 7, 3]))
