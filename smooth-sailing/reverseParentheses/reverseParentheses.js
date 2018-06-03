function reverseParentheses(s) {
    if (s.includes('(')) {
        return reverseParentheses(reverseText(s));
    }
    return s;
}

function reverseText(str) {
    // find an opening and closing parentheses in the string...
    var regexp = /\(([^()]*)\)/i;
    // grab the word, and then reverse it
    var subStr = regexp.exec(str)[1].split('').reverse('').join('')
    return str.replace(regexp, subStr);
}