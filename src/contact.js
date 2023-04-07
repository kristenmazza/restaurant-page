function componentContactButton() {
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    contactBtn.classList.add('buttons');

    return contactBtn;
}

export const contactBtn = componentContactButton();

function componentContactContainer() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    return contactContainer;
}

function componentContactFormContainer() {
    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('contact-form-container');

    return contactFormContainer;
}

function componentContactHeader() {
    const contactHeader = document.createElement('h2');
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = 'CONTACT US'

    return contactHeader;
}

export function componentContactContent() {
    const contactContainer = componentContactContainer();
    const contactFormContainer = componentContactFormContainer();
    contactContainer.appendChild(contactFormContainer);
    contactFormContainer.appendChild(componentContactHeader());

    return [contactContainer];
}