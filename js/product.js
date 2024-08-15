document.addEventListener('DOMContentLoaded', function() {
    const selectedProductId = localStorage.getItem('selectedProductId');
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id == selectedProductId);

    if (!product) {
        alert('Producto no encontrado');
        return;
    }

    const productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <p><strong>Precio:</strong> $${product.price}</p>
        <button onclick="addToCart(${product.id})">Añadir al carrito</button>
    `;

    const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id);

    const similarProductsContainer = document.getElementById('similarProductsContainer');
    similarProducts.forEach(similarProduct => {
        const similarProductCard = document.createElement('div');
        similarProductCard.classList.add('similar-product-card');
        similarProductCard.innerHTML = `
            <img src="${similarProduct.image}" alt="${similarProduct.name}">
            <h3>${similarProduct.name}</h3>
            <p>$${similarProduct.price}</p>
            <button onclick="viewProduct(${similarProduct.id})">Ver Producto</button>
        `;
        similarProductsContainer.appendChild(similarProductCard);
    });
});

function viewProduct(id) {
    localStorage.setItem('selectedProductId', id);
    window.location.href = 'product.html';
}

function addToCart(id) {
    alert('Producto añadido al carrito');
}

function viewProduct(id) {
    localStorage.setItem('selectedProductId', id);
    window.location.href = 'product.html';
}

function addToCart(id) {
    alert('Producto añadido al carrito');
}
