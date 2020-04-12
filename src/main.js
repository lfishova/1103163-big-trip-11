import {createMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createSortTemplate} from "./components/sort";
import {createEventEditTemplate} from "./components/event-edit";
import {createPointTemplate} from "./components/point";
import {createTripInfoSection} from "./components/trip-section";
import {createTripInfo} from "./components/trip-info";
import {createTripCost} from "./components/trip-cost";
import {generateFilters} from "./mock/filter.js";

const TRIP_CONTROLS = 2;
const COUNT_POINTS = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderControls = (countTripControls) => {
  for (let i = 0; i < countTripControls; i++) {
    render(Array.from(tripMenuVissuallyHiddenElements)[i], tripControls[i], `afterend`);
  }
};

const renderPoints = (countPoints) => {
  for (let i = 0; i < countPoints; i++) {
    render(tripEvent, createPointTemplate(), `beforeend`);
  }
};
const filters = generateFilters();
const tripMainElement = document.querySelector(`.trip-main`);
const tripMenuElement = tripMainElement.querySelector(`.trip-controls`);
const tripMenuVissuallyHiddenElements = tripMenuElement.querySelectorAll(`.visually-hidden`);
const tripControls = [createMenuTemplate(), createFilterTemplate(filters)];
const tripEvent = document.querySelector(`.trip-events`);
render(tripMainElement, createTripInfoSection(), `afterbegin`);
const tripInfoSection = tripMainElement.querySelector(`.trip-info`);
render(tripInfoSection, createTripInfo(), `beforeend`);
render(tripInfoSection, createTripCost(), `beforeend`);
renderControls(TRIP_CONTROLS);
render(tripEvent, createSortTemplate(), `beforeend`);
render(tripEvent, createEventEditTemplate(), `beforeend`);
renderPoints(COUNT_POINTS);
