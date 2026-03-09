// enquiry.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enquiryForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        // Prevent actual form submission to server
        event.preventDefault(); 
        
        // Grab values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if(name && email && message) {
            // Show success message
            formMessage.style.display = 'block';
            formMessage.style.color = 'green';
            formMessage.textContent = `Thank you for your enquiry, ${name}! We will send the information to ${email} shortly.`;
            
            // Clear the form
            form.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill out all the fields.';
        }
    });
});
