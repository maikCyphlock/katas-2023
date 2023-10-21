//my solution
function MySolution(s) {
    const NonrepeatedChar = []
    const separatedString = s.trim().split('')
    let IsFinished = false
    for (let i = 0; i < separatedString.length || IsFinished === true; i++) {

        if (separatedString.filter(v => v == separatedString[i]).length === 1) {
            NonrepeatedChar.push(separatedString[i])
        }

    }

    if (NonrepeatedChar.length === 0) return '_'
    return NonrepeatedChar[0]
}

//better solution

function BetterSolution(s) {
    const charMap = {};
    const separatedString = s.trim().split('');
    for (let char of separatedString) {
        charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
    for (let char of separatedString) {
        if (charMap[char] === 1) return char;
    }
    return '_';
}

BetterSolution("abacabad")