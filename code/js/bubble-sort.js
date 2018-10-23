let unsortedArr = [8, 1, 6, 10, 1, 99, 23, 7, 3, 7, 5, 0, 8];

const sortArray = (arr) => {
    let swapped = false;
    do {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped)
    console.log(arr);
}

sortArray(unsortedArr) // [0, 1, 1, 3, 5, 6, 7, 7, 8, 8, 10, 23, 99]
