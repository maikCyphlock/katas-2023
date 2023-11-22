/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives

*/

/*
The function takes two string numbers as input and returns their sum as a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
*/

//this solution for node 8
function solution(str1, str2) {
  let carry = 0;
  let sum = "";
  let i = str1.length - 1;
  let j = str2.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const digit1 = i >= 0 ? parseInt(str1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(str2[j]) : 0;
    const currentSum = digit1 + digit2 + carry;

    sum = (currentSum % 10) + sum;
    carry = Math.floor(currentSum / 10);
    i--;
    j--;
  }

  return sum;
}
//this is my solution
function solution(str1, str2) {
  return (BigInt(str1) + BigInt(str2)).toString();
}
console.log(solution("123", "321"));
console.log(
  solution("63829983432984289347293874", "90938498237058927340892374089")
);
