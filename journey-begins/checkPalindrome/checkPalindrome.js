function checkPalindrome(inputString) {
    let storage = inputString.split('');
    let newString = storage.reverse().join('');
    return newString === inputString;
}