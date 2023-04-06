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
  headline.classList.add('headline');

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
  footer.classList.add('footer');

  return footer;
}

function componentFooterLocation() {
  const footerLocation = document.createElement('div');
   footerLocation.textContent = 'LOCATION';
   footerLocation.classList.add('component-location');

   return footerLocation;
}

function componentFooterLocationText() {
  const footerLocationText = document.createElement('div');
  footerLocationText.textContent = `123 Burnt Boulevard,\nKitchen Kingdom`;
  footerLocationText.classList.add('pre', 'footer-text');

  return footerLocationText;
}

function componentFooterHours() {
  const footerHours = document.createElement('div');
  footerHours.textContent = 'HOURS';
  footerHours.classList.add('component-hours');

  return footerHours;
}

function componentFooterHoursText() {
  const footerContactText = document.createElement('div');
  footerContactText.textContent = `TUESDAY - SUNDAY: 11am - 10pm\nMONDAY: Closed (Time to chop more onions!)`;
  footerContactText.classList.add('pre', 'footer-text');

  return footerContactText;
}

function componentFooterContact() {
  const footerContact = document.createElement('div');
  footerContact.textContent = 'CONTACT';
  footerContact.classList.add('component-contact');

  return footerContact;
}

function componentFooterContactText() {
  const footerContactText = document.createElement('div');
  footerContactText.textContent = `PHONE: 555-5555-FOOD\nEMAIL: info@restaurant.com`;
  footerContactText.classList.add('pre', 'footer-text');

  return footerContactText;
}

function componentDivider() {
  const divider = document.createElement('div');
  divider.textContent = '—';
  divider.classList.add('divider');

  return divider;
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
  const footer = componentFooter();
  const footerLocation = componentFooterLocation();
  const footerHours = componentFooterHours();
  const footerContact = componentFooterContact();

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(componentName());
  header.appendChild(tabContainer);
  content.appendChild(tabContentContainer);
  tabContentContainer.appendChild(componentImage());
  tabContentContainer.appendChild(copyContainer);
  copyContainer.appendChild(componentHeadline());
  copyContainer.appendChild(componentCopy());
  content.appendChild(footer);
  footer.appendChild(footerLocation);
  footer.appendChild(footerHours);
  footer.appendChild(footerContact);
  footerLocation.appendChild(componentDivider());
  footerLocation.appendChild(componentFooterLocationText());
  footerHours.appendChild(componentDivider());
  footerHours.appendChild(componentFooterHoursText())
  footerContact.appendChild(componentDivider());
  footerContact.appendChild(componentFooterContactText());
}

