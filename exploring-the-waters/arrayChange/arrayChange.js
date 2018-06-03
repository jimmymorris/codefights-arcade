function arrayChange(inputArray) {
    let holder = [...inputArray];

    let counter = holder.reduce((total, val, i, array) => {
        if (array[i] <= array[i - 1]) {
            let diff = array[i - 1] - array[i] + 1;
            array[i] += diff;
            return total + diff;

        }
        return total;
    }, 0);

    return counter;
}

function isSorted(inputArray) {
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i + 1])
            return false;
    }

    return true;
}

function plusOne(inputArray) {
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            inputArray[i + 1] = inputArray[i + 1] + 1;
            return inputArray;
        }
    }
    return inputArray;
}