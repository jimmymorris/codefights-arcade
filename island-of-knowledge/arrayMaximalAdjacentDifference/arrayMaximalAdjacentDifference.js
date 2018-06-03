function arrayMaximalAdjacentDifference(inputArray) {
    let differential = [];

    for (let i = 0; i < inputArray.length; i++) {
        let difference = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (!isNaN(difference))
            differential.push(difference);
    }

    return Math.max(...difference)
}