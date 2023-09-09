import { buildComponent, appendComponent } from "./components.js";

function createMenuCopy(elem) {
  function createMenuItem(img, header, text) {
    const copyMenuComponent = buildComponent("div", "", { class: "copy-menu" });
    const createImg = buildComponent("img", "", {
      src: `${img}`,
      alt: "pizza-item",
    });
    const createHeaderText = buildComponent("div", `${header}`);
    const createParagraphText = buildComponent("div", `${text}`);

    copyMenuComponent.appendChild(createImg);
    copyMenuComponent.appendChild(createHeaderText);
    copyMenuComponent.appendChild(createParagraphText);

    return copyMenuComponent;
  }

  const menuItem1 = "placeholder";
  const menuItem2 = "placeholder";
  const menuItem3 = "placeholder";
  const menuItem4 = "placeholder";
  const menuItem5 = "placeholder";
  const menuItem6 = "placeholder";
  const menuItem7 = "placeholder";
  const menuItem8 = "placeholder";

//   FIX: Add ability for components.js to take multiple components as a varible.
  appendComponent(`${elem}`, [menuItem1])
}

export default createMenuCopy;
