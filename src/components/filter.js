const createFilterMarkup = (name) => {
  return (
    ` <div class="trip-filters__filter">
        <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" checked>
        <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div> `
  );
};

export const createFilterTemplate = () => {
  const filterMarkup = createFilterMarkup(`Everything`);
  return (
    ` <form class="trip-filters" action="#" method="get">
        ${filterMarkup}
        ${filterMarkup}
        ${filterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form> `
  );
};

