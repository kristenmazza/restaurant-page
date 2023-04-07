import './style.css';
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

export const tabContainer = componentTabContainer();
export const tabContentContainer = componentTabContentContainer();
export const name = componentName();

export function init() {
  const content = componentContent();
  const header = componentHeader();
  const footer = componentFooter();
  const footerLocation = componentFooterLocation();
  const footerHours = componentFooterHours();
  const footerContact = componentFooterContact();

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(componentName());
  header.appendChild(tabContainer);
  content.appendChild(tabContentContainer);

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


