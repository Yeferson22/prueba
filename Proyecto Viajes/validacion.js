// Add your JavaScript code here

const form = document.querySelector('#contacto form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo lo antes posible.');
});