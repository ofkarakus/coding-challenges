const reverseWords = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
};

console.log(reverseWords("days. big make things Little"));
console.log(
  reverseWords("impossible. mean not does hard but hard, be to going It’s")
);
