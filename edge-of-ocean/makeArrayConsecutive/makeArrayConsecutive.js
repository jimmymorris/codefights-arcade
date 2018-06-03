function makeArrayConsecutive(statues) {
    let numStatues = statues.length;
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    return (Math.abs(min - max) - (numStatues)) + 1;
}