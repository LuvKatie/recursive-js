function fibRec(n, arr = [0, 1]) {
    if (n == 2) {
        return arr;
    } else {
        let nextFib = arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(nextFib);
        return fibRec(n - 1, arr);
    }
}