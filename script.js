// script.js

// Example product data (for demonstration)
const products = {
    phones: [
      { name: 'iPhone', price: 999, image: 'iphone.jpg' },
      { name: 'Infinix', price: 199, image: 'infinix.jpg' },
      { name: 'Samsung', price: 899, image: 'samsung.jpg' },
      { name: 'Techno', price: 299, image: 'techno.jpg' }
    ],
    laptops: [
      { name: 'Mac', price: 1999, image: 'mac.jpg' },
      { name: 'HP', price: 899, image: 'hp.jpg' },
      { name: 'Dell', price: 999, image: 'dell.jpg' },
      { name: 'Lenovo', price: 799, image: 'lenovo.jpg' }
    ],
    accessories: [
      { name: 'Earpiece', price: 49, image: 'earpiece.jpg' },
      { name: 'Headset', price: 69, image: 'headset.jpg' },
      { name: 'Bluetooth', price: 39, image: 'bluetooth.jpg' }
    ]
  };
  
  // Function to populate products based on category
  function showProducts(category) {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
  
    products[category].forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      // Product Image
      const imageElement = document.createElement('img');
      imageElement.src = `images/${product.image}`;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);
  
      // Product Details
      const detailsElement = document.createElement('div');
      detailsElement.classList.add('product-details');
      detailsElement.innerHTML = `<h3>${product.name}</h3><p class="product-price">$${product.price}</p>`;
      productElement.appendChild(detailsElement);
  
      // Add to Cart Button (dummy functionality for demo)
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', () => {
        alert(`Added ${product.name} to cart!`);
      });
      productElement.appendChild(addButton);
  
      productsSection.appendChild(productElement);
    });
  }
  