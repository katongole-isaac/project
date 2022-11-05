const getRandomColor = (arraySize) => {
  if (arraySize === null || arraySize === undefined || arraySize === 0)
    return [];
  let color = "rgba(",
    colorNumberLimit = 3,
    colorArray = [],
    opacity = 0.5,
    colorSpace = 10,
    randomNumber;

  for (let colorsCount = 0; colorsCount < arraySize; colorsCount++) {
    //getting a specific color
    color = "rgba("; //reseting color back to rgba(

    for (let i = 0; i < colorNumberLimit; i++) {
      randomNumber = Math.floor(Math.random() * 245);
      if (i % 2 == 0) randomNumber += colorSpace;
      color = color + `${randomNumber},`;
    }
    color = color + `${opacity})`; //opacity set
    colorArray.push(color);
  }
  return colorArray;
};
export { getRandomColor };
