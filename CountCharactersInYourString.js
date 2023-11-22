/*
    The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.

*/

function solution(string) {
  const splittedString = string.split("");
  const result = splittedString.reduce((c, v) => {
    c[v] = (c[v] || 0) + 1;
    return c;
  }, {});
  return result;
}

console.log(solution("sdsd"));
