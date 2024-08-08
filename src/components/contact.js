export default function contact() {
    const component = document.createElement('div');
    component.classList.add('contact__container');

    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    component.appendChild(header);

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute('for', 'name');
    form.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    form.appendChild(nameInput);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.setAttribute('for', 'email');
    form.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    form.appendChild(emailInput);

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    messageLabel.setAttribute('for', 'message');
    form.appendChild(messageLabel);

    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.name = 'message';
    messageTextarea.required = true;
    form.appendChild(messageTextarea);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';
    submitButton.classList.add('btn');
    form.appendChild(submitButton);

    component.appendChild(form);

    return component;
}

