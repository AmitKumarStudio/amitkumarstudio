// Contact Form Validation
// Contact Form Validation
function validateContactForm() {
    let isValid = true;

    // Reset error messages
    document.getElementById('contact-name-error').textContent = '';
    document.getElementById('contact-email-error').textContent = '';
    document.getElementById('contact-reason-error').textContent = '';
    document.getElementById('contact-profession-error').textContent = '';
    document.getElementById('contact-message-error').textContent = '';

    // Validate Name
    const name = document.getElementById('contact-name').value.trim();
    if (name === '') {
        document.getElementById('contact-name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('contact-email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        document.getElementById('contact-email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('contact-email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Reason
    const reason = document.getElementById('contact-reason').value;
    if (reason === '') {
        document.getElementById('contact-reason-error').textContent = 'Please select a reason.';
        isValid = false;
    }

    // Validate profession
    const profession = document.getElementById('contact-profession').value;
    if (profession === '') {
        document.getElementById('contact-profession-error').textContent = 'Please select a reason.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('contact-message').value.trim();
    if (message === '') {
        document.getElementById('contact-message-error').textContent = 'Message is required.';
        isValid = false;
    }

    // Prevent form submission if validation fails
    return isValid;
}


// Feedback Form Validation
function validateFeedbackForm() {
    let isValid = true;

    // Reset error messages
    document.getElementById('feedback-name-error').textContent = '';
    document.getElementById('feedback-email-error').textContent = '';
    document.getElementById('experience-option-error').textContent = ''; // Corrected here
    document.getElementById('feedback-message-error').textContent = '';

    // Validate Name
    const name = document.getElementById('feedback-name').value.trim();
    if (name === '') {
        document.getElementById('feedback-name-error').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('feedback-email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        document.getElementById('feedback-email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('feedback-email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Experience (for feedback form)
    const experience = document.getElementById('experience-option').value;
    if (experience === '') {
        document.getElementById('experience-option-error').textContent = 'Please select your experience.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('feedback-message').value.trim();
    if (message === '') {
        document.getElementById('feedback-message-error').textContent = 'Message is required.';
        isValid = false;
    }

    // Prevent form submission if validation fails
    return isValid;
}
