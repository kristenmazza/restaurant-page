import './style.css';
import Overcooked from './overcooked.jpeg';

function componentContent() {
  const content = document.createElement('div');

  content.innerHTML = 'Hello webpack!';
  content.setAttribute('id', 'content');

  return content;
}

function componentTabContainer() {
  const tabContainer = document.createElement('div');

  return tabContainer;
}

function componentTabContentContainer() {
  const tabContentContainer = document.createElement('div');

  return tabContentContainer;
}

function componentHeadline() {
  const headline = document.createElement('h1');

  headline.textContent = 'My Restaurant';

  return headline;
}

function componentCopy() {
  const copy = document.createElement('div');
  copy.textContent = 'This is my copy.';

  return copy;
}

function componentFooter() {
  const footer = document.createElement('div');

  return footer;
}

function componentImage() {
  // const mainImage = document.createElement('img');
  // mainImage.src = Overcooked;
  const mainImage = new Image();
  mainImage.src = Overcooked;

  return mainImage;
}

export const tabContainer = componentTabContainer();
export const tabContentContainer = componentTabContentContainer();

export function init() {
  const content = componentContent();
  document.body.appendChild(content);
  content.appendChild(tabContainer);
  content.appendChild(tabContentContainer);
  content.appendChild(componentHeadline());
  content.appendChild(componentCopy());
  content.appendChild(componentImage());
  content.appendChild(componentFooter());
}


// create container for tabs, content, footer; export tab container (div with buttons) and tab content container (e.g., container with home, menu, etc.)
// only things you manipulate need to be exported