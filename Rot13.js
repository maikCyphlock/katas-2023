/**
  ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
  
  Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function solution(string) {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ]
    const splittedString = string.split('')
    let newMessage = ''

    splittedString.forEach(word => {
        const index = alphabet.findIndex((letter) => letter === word)
        const newIndex = index + 13;


        newMessage += alphabet[newIndex % 26]
    });
    return newMessage
}
console.log(
    solution('mrfg'))


//implement Rot13 algorithm
// IA WINS THIS
function rot13(str) {
    var result = "";

    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            // Non-alphabetic characters
            result += str.charAt(i);
        }
    }

    return result;
}

let encrypted = rot13("Hello, World!");
console.log(encrypted); // Outputs "Uryyb, Jbeyq!"