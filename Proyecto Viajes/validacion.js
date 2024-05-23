// Add your JavaScript code here

const form = document.querySelector('#contacto form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo lo antes posible.');
});
const cartListElement = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout");

let cartItems = [];

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const tripName = event.target.getAttribute("data-trip-name");
    const tripPrice = parseFloat(event.target.getAttribute("data-trip-price"));
    const cartItem = {
      name: tripName,
      price: tripPrice
    };
    cartItems.push(cartItem);
    updateCart();
  } else if (event.target.id === "checkout") {
    alert("Gracias por su compra! Su total es de $" + totalPriceElement.textContent);
    cartItems = [];
    updateCart();
  }
});

function updateCart() {
  cartListElement.innerHTML = "";
  let totalPrice = 0;
  cartItems.forEach((cartItem) => {
    const cartItemElement = document.createElement("li");
    cartItemElement.textContent = `${cartItem.name} - $${cartItem.price.toFixed(2)}`;
    cartListElement.appendChild(cartItemElement);
    totalPrice += cartItem.price;
  });
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}