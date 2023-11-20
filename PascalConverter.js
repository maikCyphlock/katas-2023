

function toUnderscore(string) {
    function detectarCaso(s) {
        if (s === s.toUpperCase()) {
            return "El string está en mayúsculas";
        } else if (s === s.toLowerCase()) {
            return "El string está en minúsculas";
        } else {
            return "El string tiene una mezcla de mayúsculas y minúsculas";
        }
    }

    const SplittedString = string.split('');

    return SplittedString.map((letter, index) => {
        if (letter === letter.toUpperCase() && index !== 0) {
            return SplittedString[index] = '_' + letter.toLowerCase();
        }
        else {
            return letter.toLowerCase()
        }
    }).join('')

}

console.log(toUnderscore('HolaMundoJajaJa'))
console.log(toUnderscore('holaMundoJajaJa'))