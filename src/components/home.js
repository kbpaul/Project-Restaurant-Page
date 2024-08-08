import menu from './menu';
import checkout from './checkout';
import burger from '../assets/burger.jpg';
import pasta from '../assets/pasta1.jpg';

export default function home() {
    const component = document.createElement("div");
    component.classList.add("main__container");

    // Slideshow background container
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");

    const images = [
        { src: burger, text: "Delicious Burger" },
        { src: pasta, text: "Tasty Pasta" }
    ];

    images.forEach(({ src, text }) => {
        const slide = document.createElement("div");
        slide.classList.add("mySlides");

        const img = document.createElement("img");
        img.src = src;
        img.classList.add("slide-image");

        const textOverlay = document.createElement("div");
        textOverlay.classList.add("slide-text");
        textOverlay.textContent = text;

        slide.appendChild(img);
        slide.appendChild(textOverlay);
        slideshowContainer.appendChild(slide);
    });

    // Append the slideshow continer to the body to act as a background
    document.querySelector('#content').appendChild(slideshowContainer);

    // Content that stays on top of the slideshow
    const header = document.createElement("h1");
    header.textContent = "Welcome to G'sK";
    component.appendChild(header);

    const para = document.createElement("p");
    para.classList.add("intro");
    para.textContent = "Experience the finest dining with our exquisite menu options. Enjoy a culinary journey that will tantalize your taste buds.";
    component.appendChild(para);


    const button_container = document.createElement("div");
    button_container.classList.add("btn-container");
    


    const showMoreButton = document.createElement("button");
    showMoreButton.textContent = "Show More";
    showMoreButton.classList.add("btn");
    showMoreButton.addEventListener('click', () => loadContent(menu));
    button_container.appendChild(showMoreButton);

    const placeOrderButton = document.createElement("button");
    placeOrderButton.textContent = "Place Order";
    placeOrderButton.classList.add("btn");
    placeOrderButton.addEventListener('click', () => loadContent(checkout));
    button_container.appendChild(placeOrderButton);

    component.appendChild(button_container);

     // Append the main content after adding the slideshow
     document.querySelector('#content').appendChild(component);

    // Ensure the showSlides function is called after the slides are created
    setTimeout(showSlides, 100);

    return component;
}


function loadContent(pageFunction) {
    const content = document.querySelector('#content');
    if (content) {
        content.innerHTML = ''; // Clear existing content
        content.appendChild(pageFunction()); // Load new content
    } else {
        console.error('No element with id "content" found.');
    }
}



function showSlides() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');

    function displaySlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slideIndex++;
        if (slideIndex > slides.length) { 
            slideIndex = 1; 
        }
        slides[slideIndex - 1].style.display = 'block';
    }

    displaySlides();  // Initial display
    setInterval(displaySlides, 3000);  // Change image every 3 seconds
}
