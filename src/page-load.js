import './style.css';
import Overcooked from './overcookedheader.png';
import OvercookedLogo from './overcookedlogo.png';

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
  const logo = new Image();
  logo.src = OvercookedLogo;
  logo.classList.add('logo');

  return logo;
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
  headline.textContent = 'Welcome to Overcooked Restaurant!';

  return headline;
}
function componentCopyContainer() {
  const copyContainer = document.createElement('div');
  copyContainer.classList.add('copy-container');

  return copyContainer;
}

function componentCopy() {
  const copy = document.createElement('div');
  copy.classList.add('copy', 'pre');
  copy.textContent = `Welcome to Overcooked Restaurant, where culinary chaos reigns supreme! If you're looking for an exciting dining experience that's sure to satisfy your appetite for adventure, look no further than Overcooked. \n\nWith a menu that's constantly changing and evolving, there's always something new to try at Overcooked. Whether you're in the mood for classic comfort food or innovative fusion cuisine, our talented chefs are always pushing the boundaries of what's possible. \n\nSo gather your friends and family, and join us for a meal that's sure to be an unforgettable experience. At Overcooked Restaurant, the heat is always on and the excitement is never-ending!`;

  return copy;
}

function componentFooter() {
  const footer = document.createElement('div');
  footer.textContent = 'footer';

  return footer;
}

function componentImage() {
  // const mainImage = document.createElement('div');
  // mainImage.style.backgroundImage = `url(${Overcooked})`;
  // mainImage.classList.add('main-image');

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
  const copyContainer = componentCopyContainer();

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(componentName());
  header.appendChild(tabContainer);
  content.appendChild(tabContentContainer);
  tabContentContainer.appendChild(componentImage());
  tabContentContainer.appendChild(copyContainer);
  copyContainer.appendChild(componentHeadline());
  copyContainer.appendChild(componentCopy());
  content.appendChild(componentFooter());
}

