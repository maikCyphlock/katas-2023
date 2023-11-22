function solution(inputString) {
  const reversedString = inputString.split("").reverse().join("");
  return inputString === reversedString ? true : false;
}

solution("abacabad");
console.log(solution("arepera"));
