function almostIncreasingSequence(sequence) {
    let falseCounter = 0;

    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            falseCounter++;
            if (sequence[i + 1] <= sequence[i - 1] && sequence[i] <= sequence[i - 2]) {
                return false;
            }
        }
    }

    return falseCounter <= 1;
}