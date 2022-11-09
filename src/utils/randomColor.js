const getOneRandomColor = () => {
  let symbols = "012345678ABCDEF",
    color = "#";
  const COLOR_CHAR_LEN = 6;
  for (let index = 0; index < COLOR_CHAR_LEN; index++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  return color;
};

export { getOneRandomColor };
