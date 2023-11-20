/**
    Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
 */

function solution(instructions) {
    let ArrayToReturn = []
    let value = 0;
    let SplittedInstruction = instructions.split('')
    const MAP = {
        i: () => value++,
        d: () => value--,
        s: () => value = value ** 2,
        o: () => ArrayToReturn.push(value)
    }

    SplittedInstruction.forEach(instruction => {
        try {
            MAP[instruction]()
        } catch (error) {
            return
        }
    });
    return ArrayToReturn
}

console.log(solution("iiiso")) // --> 9 
console.log(solution("iiisdosof")) // --> [8,64]


function Codember(instructions) {
    let ArrayToReturn = []
    let value = 0;
    let SplittedInstruction = instructions.split('')
    const MAP = {
        "#": () => value++,
        "@": () => value--,
        "*": () => value = value * value,
        "&": () => ArrayToReturn.push(value)
    }

    SplittedInstruction.forEach(instruction => {
        try {
            MAP[instruction]()
        } catch (error) {
            return
        }
    });
    return ArrayToReturn.join('')
}


console.log(
    Codember("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&")
)