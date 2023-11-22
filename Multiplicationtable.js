/**
    Your task, is to create N×N multiplication table, of size provided in parameter.

    For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
  
 */

function solution(size) {
  const arr = [];
  for (let i = 1; i <= size; i++) {
    const arr2 = [];
    for (let j = 1; j <= size; j++) {
      arr2.push(i * j);
    }
    arr.push(arr2);
  }

  return arr;
}
console.log(solution(12));
