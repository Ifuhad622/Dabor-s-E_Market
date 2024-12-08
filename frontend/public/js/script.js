document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  // Fetch Products
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
      displayProducts(products);

      // Filter functionality
      searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
      });
    })
    .catch(err => console.error('Error fetching products:', err));

  // Display Products
  function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: NLe ${product.price.toFixed(2)}</p>
      `;
      productList.appendChild(productCard);
    });
  }
});

