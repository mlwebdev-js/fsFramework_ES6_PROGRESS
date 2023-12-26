
// Using Validation methods

const email = 'user@example.com';
const password = 'password123';
const confirmPassword = 'password123';

const validateHandler = () => {
    if (validation.validateEmail(email) && validation.validatePassword(password)) {
        if (validation.confirmPassword(password, confirmPassword)) {
            // Proceed with form submission or further processing
            console.log('Form submitted successfully!');
            console.log(`Email: ${email}`);
        } else {
            // Handle mismatched passwords
            console.log('Passwords do not match!');
        }
    } else {
        // Handle invalid email or password
        console.log('Invalid email or password!');
    }
}


// utility

setupButtonListener() {
    document.addEventListener('DOMContentLoaded', () => {
        const submitButton = this.fs('#submitForm');
        if (submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.handleFormSubmission();
            });
        }
    });
}

handleFormSubmission() {
    const inputs = document.querySelectorAll('form input[type="text"]');
    const dataObject = {};

    let isValid = true;
    inputs.forEach(input => {
        if (!this.validateInput(input)) {
            isValid = false;
        } else {
            dataObject[input.name] = input.value;
        }
    });

    if (isValid) {
        // Add to existing data array in localStorage
        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        existingData.push(dataObject);
        this.setLocalStorage(existingData, 'formData');
    }
}

validateInput(input) {
    // Basic validation: check if the input is not empty
    const isValid = input.value.trim() !== '';
    if (!isValid) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
    }
    return isValid;
}

/*
setupFormListener() {
    document.addEventListener('DOMContentLoaded', () => {
        const form = this.fs('#submitForm');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.handleFormSubmission(form);
            });
        }
    });
}

handleFormSubmission(form) {
    const formData = new FormData(form);
    const dataObject = {};
    for (let [key, value] of formData.entries()) {
        if (key === 'id') {
            dataObject[key] = parseInt(value, 10); // Assuming 'id' should be an integer
        } else {
            dataObject[key] = value;
        }
    }
    */

    // Assume we're adding to an existing array in localStorage
    // const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    // existingData.push(dataObject);
    // this.setLocalStorage(existingData, 'formData');}


setLocalStorage(array, key) {
    localStorage.setItem(key, JSON.stringify(array));
}