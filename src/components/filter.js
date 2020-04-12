const createFilterMarkup = (name) => {
  return (
    ` <div class="trip-filters__filter">
        <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name}" checked>
        <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div> `
  );
};

export const createFilterTemplate = () => {
  const filterMarkup = [{name: `Everything`}, {name: `Future`}, {name: `Past`}].map((it) => createFilterMarkup(it.name)).join(`\n`);
  return (
    ` <form class="trip-filters" action="#" method="get">
        ${filterMarkup}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form> `
  );
};


