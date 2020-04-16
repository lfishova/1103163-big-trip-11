import {OFFERS} from "../const.js";

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const generateOffers = (count) => {
  const setDescription = new Set();
  const descriptions = [];
  for (let i = 0; i < count; i++) {
    setDescription.add(OFFERS[getRandomIntegerNumber(0, OFFERS.length)]);
  }
  setDescription.forEach((it) => descriptions.push(it));
  return descriptions;
};

export {generateOffers};

