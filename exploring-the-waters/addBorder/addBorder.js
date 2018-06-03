function addBorder(picture) {
    let topBottom = '*'.repeat(picture[0].length + 2),
        framed = picture.map(x => `*${x}*`);

    framed.unshift(topBottom);
    framed.push(topBottom);

    return framed;
}