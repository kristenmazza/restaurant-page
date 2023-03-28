import { tabContainer, init } from './page-load';

init();

// const tabContent = document.createElement('div');
// tabContentContainer.appendChild(tabContent);
// tabContent.classList.add('tab-content');

const home = document.createElement('button');
home.textContent = 'HOME';
tabContainer.appendChild(home);

const menu = document.createElement('button');
menu.textContent = 'MENU';
tabContainer.appendChild(menu);

const contact = document.createElement('button');
contact.textContent = 'CONTACT';
tabContainer.appendChild(contact);



