export default function menu() {
    const menuDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Our Menu";
    menuDiv.appendChild(h1);
    // Add more content related to the menu
    return menuDiv;
}
