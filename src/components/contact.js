import { appendComponent, buildComponent } from "./componentfunctions";
import restaurantLocation from "../img/restaurant-location.PNG";

function createContactCopy(elem) {
  const copyContactComponent = buildComponent("div", "", {
    class: "copy-contact",
  });

  const phoneComponent = buildComponent("div", "");
  const phoneText = buildComponent("div", "999-999-9999");
  const phoneSymbol = buildComponent("i", "", {
    class: "fa-solid fa-phone",
  });
  appendComponent(phoneComponent, [phoneSymbol, phoneText]);

  const addressComponent = buildComponent("div", "");
  const addressText = buildComponent(
    "div",
    "3701 SW 12th St, Topeka, KS 66604"
  );
  const addressSymbol = buildComponent("i", "", {
    class: "fa-solid fa-house",
  });

  const addressImgComponent = buildComponent("img", "", {
    src: restaurantLocation,
    alt: "map",
  });
  appendComponent(addressComponent, [addressSymbol, addressText]);

  appendComponent(copyContactComponent, [
    phoneComponent,
    addressComponent,
    addressImgComponent,
  ]);
  appendComponent(`${elem}`, [copyContactComponent]);
}

export default createContactCopy;
