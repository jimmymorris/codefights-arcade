function commonCharacterCount(s1, s2) {
    let counter = 0,
        str1 = s1.split(''),
        str2 = s2.split(''),
        unique = str1.filter(function (item, i, ar) { return ar.indexOf(item) === i; });


    for (var letter of unique) {
        let count1 = str1.reduce((total, item) => {
            if (item == letter)
                total++;
            return total;
        }, 0);

        let count2 = str2.reduce((total, item) => {
            if (item == letter)
                total++;
            return total;
        }, 0);

        counter += Math.min(count1, count2);
    };

    return counter;
}