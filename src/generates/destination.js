import {generatePictures, generateDescription} from "./picture.js";
import {CITIES} from "../const.js";

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};
const generateDestination = () => {
  return {
    name: getRandomArrayItem(CITIES),
    description: generateDescription(getRandomIntegerNumber(1, 6)),
    pictures: generatePictures(getRandomIntegerNumber(1, 6)),
  };
};

// const generateDestinations = (count) => {
//   return new Array(count)
//     .fill(``)
//     .map(generateDestination);
// };

export {generateDestination};

