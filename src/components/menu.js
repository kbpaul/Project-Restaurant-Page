import pizzaImage from '../assets/pizza1.jpg';
import burgerImage from '../assets/burger.jpg';
import pastaImage from '../assets/pasta1.jpg';



export default function menu() {
    const component = document.createElement('div');
    component.classList.add('menu__container');

    const header = document.createElement('h1');
    header.textContent = 'Our Menu';
    component.appendChild(header);

    const menuItems = [
        { name: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', price: '$12.99', image: pizzaImage },
        { name: 'Cheeseburger', description: 'Juicy beef burger with cheddar cheese, lettuce, and tomato.', price: '$10.99', image: burgerImage },
        { name: 'Pasta Alfredo', description: 'Creamy Alfredo pasta with Parmesan cheese and garlic.', price: '$14.99', image: pastaImage }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('menu-item-image');

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('menu-item-info');

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;

        itemInfo.appendChild(name);
        itemInfo.appendChild(description);
        itemInfo.appendChild(price);

        menuItem.appendChild(img);
        menuItem.appendChild(itemInfo);

        component.appendChild(menuItem);
    });

    return component;
}
