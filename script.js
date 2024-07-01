// script.js

// Sample data for products with pictures
const products = {
  phones: [
    { id: 1, name: 'iPhone', price: 999, image: 'iphone.jpg' },
    { id: 2, name: 'Samsung', price: 899, image: 'samsung.jpg' },
    // Add more phones as needed
  ],
  laptops: [
    { id: 3, name: 'Mac', price: 1499, image: 'mac.jpg' },
    { id: 4, name: 'HP', price: 1099, image: 'hp.jpg' },
    // Add more laptops as needed
  ],
  accessories: [
    { id: 5, name: 'Earpiece', price: 49, image: 'earpiece.jpg' },
    { id: 6, name: 'Headset', price: 79, image: 'headset.jpg' },
    // Add more accessories as needed
  ]
};

// Cart object to store selected items
let cart = [];

// Function to add item to cart
function addToCart(category, productId) {
  const product = products[category].find(item => item.id === productId);
  if (product) {
    cart.push(product);
    saveCartToStorage(); // Save cart to session storage
    updateCartCount();
    displayCart();
    calculateTotal();
    alert(`${product.name} added to cart.`);
  }
}

// Function to save cart data to session storage
function saveCartToStorage() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart data from session storage
function loadCartFromStorage() {
  const cartData = sessionStorage.getItem('cart');
  if (cartData) {
    cart = JSON.parse(cartData);
  } else {
    cart = []; // Initialize cart if not found in storage
  }
}

// Function to display products based on category
function showProducts(category) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';

  if (products[category]) {
    products[category].forEach(product => {
      const item = document.createElement('div');
      item.classList.add('product-item');
      item.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart('${category}', ${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(item);
    });
  } else {
    productsContainer.innerHTML = '<p>No products found.</p>';
  }
}

// Function to update cart count display
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length.toString();
}

// Function to calculate total amount
function calculateTotal() {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to load cart data and calculate total on checkout page
function loadCartAndCalculateTotal() {
  loadCartFromStorage();
  displayCart();
  calculateTotal();
}
