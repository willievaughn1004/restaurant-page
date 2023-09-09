import { buildComponent, appendComponent } from "./components.js";
import createHomeCopy from "./home.js";
import createMenuCopy from "./menu.js";
import createContactCopy from "./contact.js";

function createHeader() {
  const headerComponent = buildComponent("header", "");

  const headerText = buildComponent("div", "Joe's Pizzaria", {
    class: "headerText",
  });
  const headerSubText = buildComponent("div", "(We're not a cult)", {
    class: "headerSubText",
  });
  const links = createNav();

  appendComponent(headerComponent, [headerText, headerSubText, links]);

  function createNav() {
    const navComponent = buildComponent("nav", "");

    const link1 = buildComponent("button", "Home", { class: "home" });
    const link2 = buildComponent("button", "Menu", { class: "menu" });
    const link3 = buildComponent("button", "Contact", { class: "contact" });

    navComponent.appendChild(link1);
    navComponent.appendChild(link2);
    navComponent.appendChild(link3);

    return navComponent;
  }

  appendComponent("#content", [headerComponent]);
}

function createMain() {
  const mainComponent = buildComponent("main", "", { class: "main" });

  appendComponent("#content", [mainComponent]);
}

function createFooter() {
  const footerComponent = buildComponent("footer", "");

  const copyrightText = buildComponent("div", "Copyright");
  const githubUsername = buildComponent("div", "willievaughn1004");
  const copyrightSymbol = buildComponent("i", "", {
    class: "fa-regular fa-copyright",
  });
  const githubSymbol = buildComponent("i", "", {
    class: "fa-brands fa-github",
  });

  appendComponent(footerComponent, [
    copyrightText,
    copyrightSymbol,
    githubUsername,
    githubSymbol,
  ]);

  appendComponent("#content", [footerComponent]);
}

function addPageContent() {
  createHeader();
  createMain();

  // Dom Elements
  const mainContent = document.querySelector(".main");
  const homeButton = document.querySelector(".home");
  const menuButton = document.querySelector(".menu");
  const contactButton = document.querySelector(".contact");

  // TODO: Refactor eventListeners to be less big.
  homeButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    homeButton.classList.add("border");
    menuButton.classList.remove("border");
    contactButton.classList.remove("border");
    createHomeCopy("main");
  });

  menuButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    homeButton.classList.remove("border");
    menuButton.classList.add("border");
    contactButton.classList.remove("border");
    createHomeCopy("main");
  });

  contactButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    homeButton.classList.remove("border");
    menuButton.classList.remove("border");
    contactButton.classList.add("border");
    createContactCopy();
  });

  homeButton.classList.add("border");
  createHomeCopy("main");
  createFooter();
}

addPageContent();
