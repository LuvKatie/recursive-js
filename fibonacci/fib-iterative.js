function fibs(n) {
    let array = [];
    let nextFib;

    for (i = 0; i < n; i++) {

        if (array.length < 2) {
            array.push(i);
        } else {
            nextFib = array[i - 1] + array[i - 2];
            array.push(nextFib);
        }
    }

    console.log(array);
}