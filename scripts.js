const buyButton = document.getElementById('buyNowBtn');
buyButton.addEventListener('click', function () {
    alert('Thank you for your interest! The product is currently out of stock.');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
});
document.getElementById('year').textContent = new Data().getFullYear();