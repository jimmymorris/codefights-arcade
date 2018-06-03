function areSimilar(a, b) {
    if (isArrayEquals(a, b))
        return true;

    let diff = 0,
        unique = new Set();

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            unique.add(a[i]);
            unique.add(b[i]);
            diff++;
        }
    }

    if (unique.size <= 2 && diff <= 2)
        return true;

    return false;
}

function isArrayEquals(a, b) {
    if (JSON.stringify(a) === JSON.stringify(b))
        return true;
    return false;
}