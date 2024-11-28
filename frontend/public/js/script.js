document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Loading products...';
  productList.appendChild(loadingMessage);

  fetch('/api/products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(products => {
      productList.innerHTML = ''; // Clear loading message
      if (products.length === 0) {
        productList.innerHTML = '<p>No products available.</p>';
        return;
      }
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" onerror="this.src='/images/fallback-image.jpg'" />
          <h3>${product.name}</h3>
          <p>Price: NLe ${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productCard);
      });
    })
    .catch(err => {
      console.error('Error fetching products:', err);
      productList.innerHTML = '<p>Error loading products. Please try again later.</p>';
    });
});