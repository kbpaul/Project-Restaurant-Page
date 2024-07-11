export default function home() {
    const homeDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to G'sK Restaurant - Home";
    homeDiv.appendChild(h1);
    return homeDiv;
}
