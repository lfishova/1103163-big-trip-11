import {TYPES} from "../const.js";
import {generateDestination} from "../generates/destination.js";
import {generateOffers} from "../generates/offer.js";

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const generatePoint = () => {
  return {
    id: `0`,
    type: getRandomArrayItem(TYPES),
    dateFrom: `18/03/19 12:25`,
    dateTo: `18/03/19 13:35`,
    destination: generateDestination(),
    basePrice: `1000`,
    isFavorite: Math.random() > 0.5,
    offers: generateOffers(getRandomIntegerNumber(0, 6)),
  };
};

const generatePoints = (count) => {
  return new Array(count)
    .fill(``)
    .map(generatePoint);
};

export {generatePoint, generatePoints};
