export const buildComponent = (elem, text, attributes = {}) => {
  const element = document.createElement(`${elem}`);
  element.innerText = text;

  // Add attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  return element;
}

// FIX: Finish adding functality to this to be able to work with both  
// dom elements that have and have not been added to the document.
// Also, finish adding the ability to add more than one item at once.
export const appendComponent = (targetElement, component) => {
  const content = document.querySelector(targetElement) || targetElement;
  content.appendChild(component);
}
