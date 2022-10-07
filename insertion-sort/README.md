## Insertion sort pseudocode

Now that you know how to insert a value into a sorted subarray, you can implement insertion sort:

1. Call insert to insert the element that starts at index 1 into the sorted subarray in index 0.

2. Call insert to insert the element that starts at index 2 into the sorted subarray in indices 0 through 1.

3. Call insert to insert the element that starts at index 3 into the sorted subarray in indices 0 through 2.

4. …

5. Finally, call insert to insert the element that starts at index n-1n−1n, minus, 1 into the sorted subarray in indices 0 through n-2n−2n, minus, 2.

 ------

_If you spot any bugs or issues in this activity, you can [open an issue with your proposed change](https://github.com/Dagic-zewdu/algorithm-practice/issues)._
