/**
    Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

    Example

    For sequence = [1, 3, 2, 1], the output should be
    solution(sequence) = false.

    There is no one element in this array that can be removed in order to get a strictly increasing sequence.

    For sequence = [1, 3, 2], the output should be
    solution(sequence) = true.

    You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

    [output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
 */

// function solution(sequence) {
//     let c = 0;
//     let isUsed = 1
//     for (let i = 0; i < sequence.length; i++) {
//         if (sequence[i] < sequence[i + 1]) {
//             c += 1
//         } else if (isUsed > 0) {
//             sequence.pop()
//             isUsed--
//         } else {
//             c -= 1
//         }
//     }
//     return c > 0
// }
function solution(seq) {
  var bad = 0;
  for (var i = 1; i < seq.length; i++)
    if (seq[i] <= seq[i - 1]) {
      bad++;
      if (bad > 1) return false;
      if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false;
    }
  return true;
}

console.log(solution([1, 3, 2]));
console.log(solution([3, 6, 5, 8, 10, 20, 15]));
console.log(solution([1, 2, 1, 2]));
