import { buildComponent, appendComponent } from "./components.js";

function createHomeCopy(elem) {
  const copyHomeComponent = buildComponent("div", "", { class: "copy-home" });

  const paragraph1 = buildComponent("p", "It started as an obsession");
  const paragraph2 = buildComponent("p", "But became my guiding light");
  const image = buildComponent("img", "", {
    src: "./img/pizza-copy.webp",
    alt: "pizza",
  });
  const paragraph3 = buildComponent("p", "Order online, visit us, or join us!");

  copyHomeComponent.appendChild(paragraph1);
  copyHomeComponent.appendChild(paragraph2);
  copyHomeComponent.appendChild(image);
  copyHomeComponent.appendChild(paragraph3);

  appendComponent(`${elem}`, copyHomeComponent);
}

export default createHomeCopy;