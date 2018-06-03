# Biggest Siblings?

You have a string `s` that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in `s` form a _regular bracket sequence_.

>_regular bracket sequence_: A bracket sequence is called regular if it is possible to insert some numbers and signs into the sequence in such a way that the new sequence will represent a correct arithmetic expression.

## Example

For string `s = "a(bc)de"`, the output should be `reverseParentheses(s) = "acbde"`.

## Input/Output

**[execution time limit] 4 seconds (js)**

**[input] string s**

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a _regular bracket sequence_.

**Guaranteed constraints:**
`5 ≤ s.length ≤ 55`.

**[output] integer**

The largest product of adjacent elements.