// checkout.js
export default function checkout() {
    const component = document.createElement('div');
    component.classList.add('checkout__container');

    const header = document.createElement('h1');
    header.textContent = 'Checkout';
    component.appendChild(header);

    const summary = document.createElement('p');
    summary.textContent = 'Your order summary and payment options will be displayed here.';
    component.appendChild(summary);

    // Add additional checkout details, form elements, etc. here
    const form = document.createElement('form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.required = true;
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    const addressLabel = document.createElement('label');
    addressLabel.textContent = 'Address:';
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.required = true;
    form.appendChild(addressLabel);
    form.appendChild(addressInput);

    const paymentLabel = document.createElement('label');
    paymentLabel.textContent = 'Payment Method:';
    const paymentSelect = document.createElement('select');
    const option1 = document.createElement('option');
    option1.value = 'credit';
    option1.textContent = 'Credit Card';
    const option2 = document.createElement('option');
    option2.value = 'paypal';
    option2.textContent = 'PayPal';
    paymentSelect.appendChild(option1);
    paymentSelect.appendChild(option2);
    form.appendChild(paymentLabel);
    form.appendChild(paymentSelect);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Place Order';
    submitButton.type = 'submit';
    submitButton.classList.add('btn');
    form.appendChild(submitButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        window.location.href = 'index.html'; // Redirect to home or another page after submission
    });

    component.appendChild(form);

    return component;
}
