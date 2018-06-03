function centuryFromYear(year) {
    let century = parseInt(year / 100);
    if (year % 100 !== 0)
        century++;
    return century;
}