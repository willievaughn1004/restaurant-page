export const buildComponent = (elem, text, attributes = {}) => {
  const element = document.createElement(`${elem}`);
  element.innerText = text;

  // Add attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  return element;
}

export const appendComponent = (targetSelector, component) => {
  const content = document.querySelector(targetSelector);
  content.appendChild(component);
}
