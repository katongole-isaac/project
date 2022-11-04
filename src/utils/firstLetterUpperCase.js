const firstLetterUpperCase = (str) => {
  const words = str.split(" ");
  let newWord = [];
  for (let word of words) {
    word = `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    newWord.push(word);
  }
  return "".concat(newWord).replace(/[,]/g, " ");
};

export { firstLetterUpperCase };
