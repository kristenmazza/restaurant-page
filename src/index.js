import { tabContainer, tabContentContainer, init } from './page-load';

init();

const tabContent = document.createElement('div');
tabContent.textContent = 'I am the tab content container!';
tabContentContainer.appendChild(tabContent);

const home = document.createElement('button');
home.textContent = 'HOME';
tabContainer.appendChild(home);


