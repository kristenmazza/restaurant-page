function componentContactButton() {
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    contactBtn.classList.add('buttons');

    return contactBtn;
}

export const contactBtn = componentContactButton();