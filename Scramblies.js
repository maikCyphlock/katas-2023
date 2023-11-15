/*
complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/


/**
 * Scrambles two strings and checks if all characters in the second string are present in the first string.
 *
 * @param {string} str1 - The first string to scramble.
 * @param {string} str2 - The second string to check against.
 * @return {boolean} Returns true if all characters in str2 are present in str1, otherwise false.
 */
function scramble(str1, str2) {
    if (str1.length < str2.length) return false;

    const letterCounts = {};
    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i];
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        if (!letterCounts[letter]) return false;
        letterCounts[letter] -= 1;
    }

    return true;
}





console.log(scramble('rkqodlw', 'world'))
console.log(scramble('scriptjavx', 'javascript'))
exports.scramble = scramble