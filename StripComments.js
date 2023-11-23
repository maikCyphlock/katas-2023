/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(str, markers) {
  const lines = str.split("\n");
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    for (const marker of markers) {
      const index = line.indexOf(marker);

      if (index !== -1) {
        line = line.slice(0, index).trim();
      }
    }

    result.push(line);
  }

  return result.join("\n");
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);
