import { buildComponent, appendComponent } from "./componentfunctions.js";
import menuPicture from "../img/pizza-copy.webp";

function createMenuCopy(elem) {
  const copyMenuComponent = buildComponent("div", "", { class: "copy-menu" });

  function createMenuItem(img, header) {
    const copyMenuItem = buildComponent("div", "", { class: "menu-item" });
    const createImg = buildComponent("img", "", {
      src: `${img}`,
      alt: "pizza-item",
    });
    const createHeaderText = buildComponent("div", `${header}`);

    appendComponent(copyMenuItem, [createImg, createHeaderText]);

    return copyMenuItem;
  }

  const menuItem1 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem2 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem3 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem4 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem5 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem6 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem7 = createMenuItem(menuPicture, "Pepperoni");
  const menuItem8 = createMenuItem(menuPicture, "Pepperoni");

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

  appendComponent(`${elem}`, [copyMenuComponent]);
}

export default createMenuCopy;
