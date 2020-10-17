const reverseString = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i !== -1; i--) {
    reversedStr += str[i];
  }

  console.log(reversedStr);
};

reverseString("Clarusway Rocks!");
reverseString("Happy");
