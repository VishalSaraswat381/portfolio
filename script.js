// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
    } else {
        document.getElementById('formMessage').textContent = 'Message sent successfully!';
        document.getElementById('formMessage').style.color = 'green';
        document.getElementById('contactForm').reset();
    }
});

// Typed.js Initialization
var typed = new Typed("#typed-text", {
    strings: ["Web Developer", "Problem Solver", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});