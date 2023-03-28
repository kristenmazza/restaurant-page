import './style.css';
import Overcooked from './overcooked.jpeg';

function componentContent() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  return content;
}

function componentHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  return header;
}

function componentName() {
  const name = document.createElement('div');
  name.classList.add('restaurant-name');
  name.textContent = 'Restaurant Name';

  return name;
}

function componentTabContainer() {
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-container');

  return tabContainer;
}

function componentTabContentContainer() {
  const tabContentContainer = document.createElement('div');
  tabContentContainer.classList.add('tab-content-container');

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
  footer.textContent = 'footer';

  return footer;
}

function componentImage() {
  // const mainImage = document.createElement('img');
  // mainImage.src = Overcooked;
  const mainImage = new Image();
  mainImage.src = Overcooked;
  mainImage.classList.add('main-image');

  return mainImage;
}

export const tabContainer = componentTabContainer();
export const tabContentContainer = componentTabContentContainer();
export const name = componentName();

export function init() {
  const content = componentContent();
  const header = componentHeader();

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(componentName());
  header.appendChild(tabContainer);
  content.appendChild(tabContentContainer);
  tabContentContainer.appendChild(componentImage());
  tabContentContainer.appendChild(componentHeadline());
  tabContentContainer.appendChild(componentCopy());
  content.appendChild(componentFooter());
}


// create container for tabs, content, footer; export tab container (div with buttons) and tab content container (e.g., container with home, menu, etc.)
// only things you manipulate need to be exported