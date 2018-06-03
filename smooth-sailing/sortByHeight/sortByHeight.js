function sortByHeight(a) {
    let treePositions = findTrees(a);
    let sortedPeoples = sortPeople(a);
    if (treePositions.length)
        treePositions.map((position) => sortedPeoples.splice(position, 0, -1));

    return sortedPeoples;
}

function findTrees(heights) {
    let treePositions = [];
    heights.forEach((item, index) => {
        if (item === -1)
            treePositions.push(index);
    });
    return treePositions;
}

function sortPeople(heights) {
    let people = heights.filter(person => person !== -1);
    people.sort((a, b) => a - b);
    return people;
}