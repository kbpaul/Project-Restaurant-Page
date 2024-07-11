import './style.css';
import home from './components/home';
import menu from './components/menu';
import contact from './components/contact';

const content = document.querySelector('#content');

const loadContent = (component) => {
    content.textContent = '';  // Clear previous content
    content.appendChild(component());
};

// Load home content by default
loadContent(home);

document.querySelector('#home-button').addEventListener('click', () => loadContent(home));
document.querySelector('#menu-button').addEventListener('click', () => loadContent(menu));
document.querySelector('#contact-button').addEventListener('click', () => loadContent(contact));
