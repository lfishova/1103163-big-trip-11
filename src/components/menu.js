const createMenuMarkup = (menu) => {
  const {name, isActive} = menu;
  const activeClass = isActive ? `` : `trip-tabs__btn--active`;
  return (
    `<a class="trip-tabs__btn ${activeClass}" href="#">${name}</a>`
  );
};

export const createMenuTemplate = (menus) => {
  const menuMarkup = menus.map((it) => createMenuMarkup(it)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
        ${menuMarkup}
     </nav>`
  );
};

