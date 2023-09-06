function buildComponent(elem, text, attributes = {}) {
  const element = document.createElement(`${elem}`);
  element.innerText = text;

  // Add attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  return element;
}

function appendComponent(targetSelector, component) {
  const content = document.querySelector(targetSelector);
  content.appendChild(component);
}

function createHeader() {
  const headerComponent = buildComponent("header", "");

  const headerText = buildComponent("div", "Joe's Pizzaria", { class: "headerText" });
  const headerSubText = buildComponent("div", "(We're not a cult)", { class: "headerSubText" })
  const links = createNav();

  headerComponent.appendChild(headerText);
  headerComponent.appendChild(headerSubText);
  headerComponent.appendChild(links);

  appendComponent("#content", headerComponent);
}

function createNav() {
  const navComponent = buildComponent("nav", "");

  const link1 = buildComponent("button", "Home");
  const link2 = buildComponent("button", "Menu");
  const link3 = buildComponent("button", "Contact");

  navComponent.appendChild(link1);
  navComponent.appendChild(link2);
  navComponent.appendChild(link3);

  return navComponent;
}

function createCopy() {
  const copyComponent = buildComponent("div", "", { class: "copy" });

  const paragraph1 = buildComponent("p", "It started as an obsession");
  const paragraph2 = buildComponent("p", "But became my guiding light");
  const image = buildComponent("img", "", {
    src: "./img/pizza-copy.webp",
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
    ""
  );

  const copyrightText = buildComponent("div", "Copyright")
  const githubUsername = buildComponent("div", "willievaughn1004")
  const copyrightSymbol = buildComponent(
    "i", "", { class: "fa-regular fa-copyright"}
  );
  const githubSymbol = buildComponent(
    "i", "", { class: "fa-brands fa-github"}
  );
  
  footerComponent.appendChild(copyrightText);
  footerComponent.appendChild(copyrightSymbol);
  footerComponent.appendChild(githubUsername);
  footerComponent.appendChild(githubSymbol);

  appendComponent("#content", footerComponent);
}

createHeader();
createCopy();
createFooter();
