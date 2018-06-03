function palindromeRearranging(inputString) {
    let counter = inputString.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
    let oddCounter = 0;

    for (let key in counter) {
        if (counter[key] % 2 !== 0)
            oddCounter++;
    }

    return oddCounter < 2
}