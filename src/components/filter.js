const createFilterMarkup = () => {
  return (
    ` <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div> `
  );
};

export const createFilterTemplate = () => {
  const filterMarkup = createFilterMarkup();
  return (
    ` <form class="trip-filters" action="#" method="get">
        ${filterMarkup}
        ${filterMarkup}
        ${filterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form> `
  );
};

