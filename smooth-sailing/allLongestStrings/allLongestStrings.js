function allLongestStrings(inputArray) {
    const longestString = inputArray.reduce(function (maxLength, str) {
        return Math.max(maxLength, str.length);
    }, 0);

    return inputArray.reduce((longOnes, str) => {
        if (str.length === longestString)
            longOnes.push(str);
        return longOnes;
    }, []);
}