export default function home() {
    const component = document.createElement("div");
    component.classList.add("main__container");

    const header = document.createElement("h1");
    header.textContent = "Welcome to G'sK";

    component.appendChild(header);

    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue";
    component.appendChild(para);

    const button = document.createElement("button");
    button.textContent = "Place an Order";
    component.appendChild(button);

    return component;
}
