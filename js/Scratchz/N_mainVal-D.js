
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
