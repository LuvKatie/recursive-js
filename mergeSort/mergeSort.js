let array = [4, 2, 6, 5, 1, 3];
let testArr = [2, 1];

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let half = Math.floor(arr.length / 2);
    // Recursively divide left and right half of the array
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));

    // Evaluate each half on split
    return merge(left, right);
}

function merge(left, right) {
    const resultArr = [];

    while (left.length > 0 && right.length > 0) {
        console.log(resultArr, left, right);
        const minValue = left[0] < right[0] ? left : right;
        const getValue = minValue.shift();
        resultArr.push(getValue);
    }

    return resultArr.concat(left, right);
}
