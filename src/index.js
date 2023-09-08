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

  headerComponent.appendChild(headerText);
  headerComponent.appendChild(headerSubText);
  headerComponent.appendChild(links);

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

  appendComponent("#content", headerComponent);
}

function createMain() {
  const mainComponent = buildComponent("main", "", { class: "main" });

  appendComponent("#content", mainComponent);
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

  footerComponent.appendChild(copyrightText);
  footerComponent.appendChild(copyrightSymbol);
  footerComponent.appendChild(githubUsername);
  footerComponent.appendChild(githubSymbol);

  appendComponent("#content", footerComponent);
}

function addPageContent() {
  createHeader();
  createMain();

  // Dom Elements
  const mainContent = document.querySelector(".main");
  const homeButton = document.querySelector(".home");
  const menuButton = document.querySelector(".menu");
  const contactButton = document.querySelector(".contact");

  homeButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    createHomeCopy("main");
  });

  menuButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    createMenuCopy();
  });

  contactButton.addEventListener("click", function () {
    mainContent.innerHTML = "";
    createContactCopy();
  });

  createHomeCopy("main");
  createFooter();
}

addPageContent();
