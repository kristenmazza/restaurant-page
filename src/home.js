import Overcooked from './overcookedheader.png';

function componentHomeButton() {
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    homeBtn.classList.add('buttons');

    return homeBtn;
}

export const homeBtn = componentHomeButton();

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

function componentHeadline() {
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Overcooked Restaurant!';
    headline.classList.add('headline');

    return headline;
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

export function componentHomeContent() {
    const copyContainer = componentCopyContainer();
    copyContainer.appendChild(componentHeadline());
    copyContainer.appendChild(componentCopy());

    return [componentImage(), copyContainer];
}