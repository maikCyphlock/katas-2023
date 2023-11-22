const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// my solution
function solution(arr) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    const newsca = [];
    for (let j = 0; j < arr[i].length; j++) {
      newsca.push(arr[j][i]);
    }
    newarr.push(newsca.reverse());
  }
  return newarr;
}

console.log(solution(a));
