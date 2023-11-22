function solution(string) {
  string = string.split("").slice(1, string.length).join("");
  const arr = string.match(/.{1,2}/g);
  const rgb = {
    r: null,
    g: null,
    b: null,
  };

  arr.forEach((element) => {
    if (rgb.r === null) return (rgb.r = parseInt(element, 16));
    if (rgb.g === null) return (rgb.g = parseInt(element, 16));
    if (rgb.b === null) return (rgb.b = parseInt(element, 16));
  });

  return rgb;
}

console.log(solution("#FF9933"));
