import { tabContainer, init } from './page-load';

init();

const home = document.createElement('button');
home.textContent = 'HOME';
tabContainer.appendChild(home);
home.classList.add('button');

const menu = document.createElement('button');
menu.textContent = 'MENU';
tabContainer.appendChild(menu);
menu.classList.add('button');

const contact = document.createElement('button');
contact.textContent = 'CONTACT';
tabContainer.appendChild(contact);
contact.classList.add('button');




