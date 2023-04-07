function componentMenuButton() {
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.classList.add('buttons');

    return menuBtn;
}

export const menuBtn = componentMenuButton();

