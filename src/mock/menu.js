const menuNames = [`Table`, `Stats`];

const generateMenus = () => {
  return menuNames.map((it) => {
    return {
      name: it,
      isActive: Math.random() > 0.5,
    };
  });
};

export {generateMenus};
