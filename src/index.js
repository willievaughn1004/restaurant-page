function buildComponent(elem, text, attributes = {}) {
  const element = document.createElement(`${elem}`);
  element.innerText = text;

  // Add attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  };

  return element;
}

function appendComponent(targetSelector, component) {
  const content = document.querySelector(targetSelector);
  content.appendChild(component);
}

function createHeader() {
  const headerComponent = buildComponent(
    "header",
    "Joe's Pizzaria (We're not a cult)"
  );
  appendComponent("#content", headerComponent);
}

function createNav() {
  const navComponent = buildComponent("nav", "");

  const link1 = buildComponent("a", "Home", { href: "#" });
  const link2 = buildComponent("a", "Menu", { href: "#" });
  const link3 = buildComponent("a", "Contact", { href: "#" });

  navComponent.appendChild(link1);
  navComponent.appendChild(link2);
  navComponent.appendChild(link3);

  appendComponent("#content", navComponent);
}

function createCopy() {
  const copyComponent = buildComponent("div", "", { class: "copy" });

  const paragraph1 = buildComponent("p", "It started as an obsession");
  const paragraph2 = buildComponent("p", "But became my guiding light");
  const image = buildComponent("img", "", {
    src: "./img/pizza.webp",
    alt: "pizza",
  });
  const paragraph3 = buildComponent("p", "Order online, visit us, or join us!");

  copyComponent.appendChild(paragraph1);
  copyComponent.appendChild(paragraph2);
  copyComponent.appendChild(image);
  copyComponent.appendChild(paragraph3);

  appendComponent("#content", copyComponent);
}

function createFooter() {
  const footerComponent = buildComponent(
    "footer",
    "Copyright willievaughn1004"
  );
  appendComponent("#content", footerComponent);
}

createHeader();
createNav();
createCopy();
createFooter();
