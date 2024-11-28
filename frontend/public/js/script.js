document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
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
    })
    .catch(err => console.error('Error fetching products:', err));
});

