
function solution(inputArray) {
    let LargestProduct = 0;

    for (let index = 0; index < inputArray.length; index++) {
        const element = inputArray[index] * inputArray[index + 1];

        if (index === 0) {
            LargestProduct = element
        } else
            if (LargestProduct < element) {
                LargestProduct = element
            }

    }
    return LargestProduct
}

console.log(solution([3, 6, -2, -5, 7, 3]))
console.log(solution([-23, 4, -3, 8, -12]))
