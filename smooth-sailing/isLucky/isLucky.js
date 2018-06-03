function isLucky(n) {
    let theNumber = n.toString();
    let theNumbers = theNumber.split('');
    let frontHalf = theNumbers.slice(0, Math.floor(theNumbers.length / 2));
    let backHalf = theNumbers.slice(Math.floor(theNumbers.length / 2), theNumbers.length);

    function totalArray(a) {
        return a.reduce((total, numb) => {
            return total += numb;
        }, 0);
    };

    frontHalf = frontHalf.map(x => parseInt(x));
    backHalf = backHalf.map(x => parseInt(x));

    return totalArray(frontHalf) === totalArray(backHalf);

}