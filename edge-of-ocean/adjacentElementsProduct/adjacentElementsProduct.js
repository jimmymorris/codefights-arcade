function adjacentElementsProduct(inputArray) {
    let listLen = inputArray.length;
    let maxProduct = inputArray[0] * inputArray[1];
    for (let index in inputArray) {
        index = parseInt(index);
        if (index < (listLen - 1)) {
            let newMax = inputArray[index] * inputArray[index + 1];
            maxProduct = Math.max(maxProduct, newMax);
        }
    }
    return maxProduct;
}