
/**
 *Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

 Examples:

 foo -> foo1

 foobar23 -> foobar24

 foo0042 -> foo0043

 foo9 -> foo10

 foo099 -> foo100

 Attention: If the number has leading zeros the amount of digits should be considered.
 */

function incrementString (strng) {
    let s = strng.split(''), n = [], m, len, nlen;
    for(let i = s.length - 1; i >= 0; i--) {
        m = parseInt(s[i]);
        if (!isNaN(m)) {
            n.unshift(m)
        } else {
            s = s.slice(0, i+1);
            break;
        }
    }
    if (n.length === 0) {
        return s.join('') + '1';
    }
    if (s.length === n.length) {
        s = [];
    }
    len = n.length;
    n = parseInt(n.join(''));
    n = n+1+'';
    nLen = n.split('').length;
    while (nLen < len) {
        n = '0'+n;
        nLen++;
    }
    return s.join('') + n;
}