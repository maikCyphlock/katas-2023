function solution(statues) {
    // Sort the array in ascending order
    statues.sort(function (a, b) {
        return a - b;
    });

    // Initialize a variable to keep track of the additional statues needed
    let additionalStatuesNeeded = 0;

    // Loop through the sorted array to find the gaps
    for (let i = 1; i < statues.length; i++) {
        const gap = statues[i] - statues[i - 1] - 1;

        if (gap > 0) {
            additionalStatuesNeeded += gap;
        }
    }

    return additionalStatuesNeeded;
}

// Example usage
const statues = [6, 2, 3, 8];
const result = solution(statues);
console.log(result); // Output: 3




