import { contactBtn } from './contact';
import { componentHomeContent, homeBtn} from './home';
import { componentMenuContent, menuBtn } from './menu';
import { tabContainer, init, tabContentContainer } from './page-load';

init();

tabContainer.appendChild(homeBtn);
tabContainer.appendChild(menuBtn);
tabContainer.appendChild(contactBtn);

homeBtn.addEventListener('click', () => {
    // Spread operator adds image and copy as children to tabContentContainer.
    // Spread operator allows you to add a dynamic number of parameters based on the length of the
    // returned array
    tabContentContainer.replaceChildren(...componentHomeContent());
});

menuBtn.addEventListener('click', () => {
    tabContentContainer.replaceChildren(...componentMenuContent());
    // TODO: append menu page
});

contactBtn.addEventListener('click', () => {
    tabContentContainer.replaceChildren();
    // TODO: append contact page
});


tabContentContainer.replaceChildren(...componentHomeContent());

