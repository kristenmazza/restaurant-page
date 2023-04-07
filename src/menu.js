import Burger from './burger.png';
import MeatBurrito from './meat-burrito.png';
import MushroomBurrito from './mushroom-burrito.png';
import Sushi from './sushi.png';
import Salad from './salad.png';
import Cake from './cake.png';

function componentMenuButton() {
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.classList.add('buttons');

    return menuBtn;
}

export const menuBtn = componentMenuButton();

function componentMenuContainer() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    return menuContainer;
}

function componentMenuItem(menuImage, title, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodImage = new Image();
    foodImage.src = menuImage;
    foodImage.classList.add('food-image');

    const foodTitle = document.createElement('h2');
    foodTitle.textContent = title;
    foodTitle.classList.add('food-title');

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    foodDescription.classList.add('food-description');

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function componentMenuHeader() {
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = `CHEF'S SPECIALS`;

    return menuHeader;
}

function componentMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    return menu;
}

function componentMenuItems() {
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menuItems.appendChild(componentMenuItem(Burger, 'Burger', `Our juicy beef patty is topped with melted cheddar cheese, crispy bacon, lettuce, tomato, and our secret sauce that's bursting with flavor. Served on a toasted sesame seed bun with a side of golden fries, this burger is the perfect fuel for your next culinary adventure.`));
    menuItems.appendChild(componentMenuItem(MeatBurrito, 'Meat Burrito', `This mouth-watering burrito is packed with a blend of perfectly seasoned meat chunks, rice, and melted cheese, all wrapped in a warm flour tortilla. Served with a generous dollop of our house-made guacamole and a side of crispy tortilla chips, this burrito is bursting with bold flavors and textures.`));
    menuItems.appendChild(componentMenuItem(MushroomBurrito, 'Mushroom Burrito', `For all the vegan chefs out there, this burrito is a meatless masterpiece that's bursting with flavor. Stuffed with sautéed mushrooms, onions, pinto beans, and rice, all wrapped in a warm flour tortilla, this burrito is the perfect blend of hearty and healthy. Served with a dollop of our house-made salsa and fresh tortilla chips.`));
    menuItems.appendChild(componentMenuItem(Sushi, 'Sushi', `Roll up your sleeves and get ready to experience a fusion of Japanese and Western cuisine with our signature sushi roll. Made with perfectly cooked sushi rice, tender strips of seared beef, avocado, and cucumber, and finished off with a drizzle of our special sauce, this sushi roll is a delicious and creative twist on a classic dish.`));
    menuItems.appendChild(componentMenuItem(Salad, 'Garden Salad', `For those who want to keep it light and healthy, our garden salad is the perfect choice. Made with a blend of fresh greens, juicy cherry tomatoes, crunchy cucumbers, and shredded carrots, this salad is topped with croutons and your choice of dressing. `));
    menuItems.appendChild(componentMenuItem(Cake, 'Chocolate Cake', `If you have a sweet tooth, this decadent chocolate cake is the perfect way to satisfy your cravings. Rich, moist, and loaded with intense chocolate flavor, this cake is a chocoholic's dream come true. Served with a scoop of creamy vanilla ice cream and drizzled with warm chocolate sauce, this dessert is the perfect way to end your meal on a high note.`));

    return menuItems;
}

export function componentMenuContent() {
    const menuContainer = componentMenuContainer();
    const menu = componentMenu();

    menuContainer.appendChild(menu);
    menu.appendChild(componentMenuHeader());
    menu.appendChild(componentMenuItems());

    return [menuContainer];
}