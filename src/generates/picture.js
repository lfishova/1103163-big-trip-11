import {DESCRIPTIONS} from "../const.js";
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};
const generateDescription = (count) => {
  const setDescription = new Set();
  const descriptions = [];
  for (let i = 0; i < count; i++) {
    setDescription.add(DESCRIPTIONS[getRandomIntegerNumber(0, DESCRIPTIONS.length)]);
  }
  setDescription.forEach((it) => descriptions.push(it));
  let strDescription = descriptions.reduce((accumulator, currentValue) => accumulator + ` ` + currentValue);
  return strDescription;
};

const generatePicture = () => {
  return {
    src: `http://picsum.photos/248/152?r=${Math.random()}`,
    description: generateDescription(getRandomIntegerNumber(1, 6)),
  };
};

const generatePictures = (count) => {
  return new Array(count)
    .fill(``)
    .map(generatePicture);
};
export {generatePictures, generateDescription};
