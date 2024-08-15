document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        cart.forEach(productId => {
            const product = products.find(p => p.id == productId);
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="removeFromCart(${productId})">Eliminar</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
});

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto eliminado del carrito!');
    location.reload();
}

document.getElementById('checkoutButton').onclick = function() {
    alert('Compra finalizada!');
    localStorage.removeItem('cart');
    window.location.href = 'home.html';
};
