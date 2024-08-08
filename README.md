# Restaurant Website

## Overview

This project is a responsive website for a restaurant, featuring a modern design with various pages including a home page, menu page, checkout page, and contact page. The site provides an elegant user experience with a slideshow on the home page, a detailed menu, and easy navigation.

## Features

- **Home Page**: Welcomes users with a slideshow of featured dishes, an introduction to the restaurant, and buttons for navigating to the menu or placing an order.
- **Menu Page**: Displays a list of menu items with images, descriptions, and prices. Users can view details of various dishes.
- **Checkout Page**: Allows users to review their order and proceed to checkout.
- **Contact Page**: Provides a form for users to contact the restaurant with their name, email, and message.
- **Responsive Design**: The site is designed to be responsive and accessible across various devices and screen sizes.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Build the Project**:
    ```bash
    npm run build
    ```

4. **Start the Development Server**:
    ```bash
    npm start
    ```

## Project Structure

- `index.html`: The main HTML file that includes the structure of the site.
- `src/`
  - `home.js`: JavaScript file for the home page.
  - `menu.js`: JavaScript file for the menu page.
  - `checkout.js`: JavaScript file for the checkout page.
  - `contact.js`: JavaScript file for the contact page.
- `assets/`: Folder containing image files used across the website.
- `styles/`
  - `style.css`: Main stylesheet for the website.
- `webpack.config.js`: Webpack configuration file for bundling the project.
- `package.json`: Contains project metadata and dependencies.

## JavaScript Modules

- **home.js**: Implements the home page with a slideshow, introductory text, and navigation buttons.
- **menu.js**: Displays the restaurant menu with images, descriptions, and prices.
- **checkout.js**: Handles the checkout process and order summary.
- **contact.js**: Provides a contact form for user inquiries.

## CSS Styling

- **Global Styles**: Defined in `style.css` to ensure consistency across pages.
- **Header and Footer**: Styled to have a fixed position with a dark background for contrast.
- **Main Content**: Centered and styled with a white background and shadow to stand out.
- **Menu Page**: Items are displayed in a grid with responsive design to ensure proper alignment on various devices.

## Image Formats

- The website supports `.jpg`, `.jpeg`, `.webp`, and other common image formats for better performance and compatibility.

## Webpack Configuration

- The Webpack setup ensures that image files are properly processed and included in the build.
- `.webp` images are supported and optimized for faster loading.

## Troubleshooting

- **404 Errors**: Check if the image paths in `assets/` are correct.
- **Styling Issues**: Ensure that CSS is correctly linked and applied to the HTML elements.
- **JavaScript Errors**: Verify that all modules are correctly imported and used.

