// redirect to non-www version of the site if the current hostname is www.safanabbasi.com. Github Pages handles this but still adding for consistency.
if (window.location.hostname === "www.safanabbasi.com") {
    window.location.href = "https://safanabbasi.com" + window.location.pathname + window.location.search;
  }

window.onload = function() { 
    document.body.classList.remove('is-preload');
    document.getElementById('contact').style.display = 'none'; // Initialize contact form as hidden
}
window.ontouchmove = function() { return false; } // disable scrolling on touch devices
window.onorientationchange = function() { document.body.scrollTop = 0; } // scroll to top on orientation change

function toggleContact(event) {  // Hide/Show contact form
    event.preventDefault();
    const contact = document.getElementById('contact');
    contact.style.display = contact.style.display === 'none' ? 'block' : 'none';
}

// Email validation
document.addEventListener('DOMContentLoaded', function() {
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const form = emailInput.closest('form');
const submitBtn = document.getElementById('submit-btn');

// Add event listener for the close button
document.querySelector('.close-button').addEventListener('click', toggleContact);

// Add event listener for the contact link
document.querySelector('.contact-link').addEventListener('click', toggleContact);

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener('blur', function() {
    if (emailInput.value && !validateEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
    } else {
        emailError.textContent = "";
        emailError.style.display = "none";
    }
});

// Add this inside your <script> tag
document.addEventListener('keydown', function(e) {
    const contact = document.getElementById('contact');
    if (e.key === "Escape" && contact.style.display === 'block') {
        contact.style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        emailInput.focus();
        e.preventDefault();
        return
    }
    // Show "Sending..." on the button
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";
});
});