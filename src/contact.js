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

function componentPhoneNumber() {
    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('contact-details');
    phoneNumber.textContent = 'PHONE: 555-5555-FOOD';

    return phoneNumber;
}

function componentEmail() {
    const email = document.createElement('p');
    email.classList.add('contact-details');
    email.textContent = 'EMAIL: info@restaurant.com';

    return email;
}

function componentContactForm() {
    const contactForm = document.createElement('form');
    contactForm.setAttribute('method', 'post');
    contactForm.setAttribute('action', '');
    contactForm.classList.add('contact-form');

    return contactForm;
}

function componentFormInputName() {
    const formInputName = document.createElement('input');
    formInputName.setAttribute('type', 'text');
    formInputName.setAttribute('id', 'name');
    formInputName.setAttribute('name', 'name');

    return formInputName;
}

function componentFormLabelName() {
    const formLabelName = document.createElement('label');
    formLabelName.setAttribute('for', 'name');
    formLabelName.innerHTML = 'FULL NAME';

    return formLabelName;
}

function componentFormInputEmail() {
    const formInputEmail = document.createElement('input');
    formInputEmail.setAttribute('type', 'email');
    formInputEmail.setAttribute('id', 'email');
    formInputEmail.setAttribute('name', 'email');

    return formInputEmail;
}

function componentFormLabelEmail() {
    const formLabelEmail = document.createElement('label');
    formLabelEmail.setAttribute('for', 'email');
    formLabelEmail.innerHTML = 'EMAIL ADDRESS';

    return formLabelEmail;
}

function componentFormInputMessage() {
    const formInputMessage = document.createElement('textarea');
    formInputMessage.setAttribute('id', 'message');
    formInputMessage.setAttribute('name', 'message');

    return formInputMessage;
}

function componentFormLabelMessage() {
    const formLabelMessage = document.createElement('label');
    formLabelMessage.setAttribute('for', 'message');
    formLabelMessage.innerHTML = 'MESSAGE';

    return formLabelMessage;
}

function componentSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'SUBMIT';

    return submitButton;
}

export function componentContactContent() {
    const contactContainer = componentContactContainer();
    const contactFormContainer = componentContactFormContainer();
    const contactForm = componentContactForm();

    contactContainer.appendChild(contactFormContainer);
    contactFormContainer.appendChild(componentContactHeader());
    contactFormContainer.appendChild(componentPhoneNumber());
    contactFormContainer.appendChild(componentEmail());
    contactFormContainer.appendChild(contactForm);
    contactForm.appendChild(componentFormLabelName())
    contactForm.appendChild(componentFormInputName());
    contactForm.appendChild(componentFormLabelEmail())
    contactForm.appendChild(componentFormInputEmail());
    contactForm.appendChild(componentFormLabelMessage())
    contactForm.appendChild(componentFormInputMessage());
    contactForm.appendChild(componentSubmitButton());

    return [contactContainer];
}