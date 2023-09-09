import { buildComponent, appendComponent } from "./components.js";

function createMenuCopy(elem) {
  const copyMenuComponent = buildComponent("div", "", { class: "copy-menu" });

  function createMenuItem(img, header) {
    const copyMenuItem = buildComponent("div", "", { class: "menu-item" })
    const createImg = buildComponent("img", "", {
      src: `${img}`,
      alt: "pizza-item",
    });
    const createHeaderText = buildComponent("div", `${header}`);

    appendComponent(copyMenuItem, [createImg, createHeaderText]);

    return copyMenuItem;
  }

  const menuItem1 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem2 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem3 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem4 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem5 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem6 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem7 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");
  const menuItem8 = createMenuItem("./img/pizza-copy.webp", "Pepperoni");

  appendComponent(copyMenuComponent, [
    menuItem1,
    menuItem2,
    menuItem3,
    menuItem4,
    menuItem5,
    menuItem6,
    menuItem7,
    menuItem8,
  ]);

  appendComponent(`${elem}`, [ copyMenuComponent ]);
}

export default createMenuCopy;
