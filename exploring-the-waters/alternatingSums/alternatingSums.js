function alternatingSums(a) {
    let team1 = [],
        team2 = [];

    for (let i = 0; i < a.length; i++) {
        console.log(i, i % 2);
        if (i % 2 === 0)
            team1.push(a[i]);
        else
            team2.push(a[i]);
    }

    let team1Sum = team1.reduce((total, member) => total + member, 0),
        team2Sum = team2.reduce((total, member) => total + member, 0);

    return [team1Sum, team2Sum];
}