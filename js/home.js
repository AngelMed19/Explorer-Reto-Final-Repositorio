document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: "Sudadera Naranja",
            price: "50",
            description: "Sudadera cómoda y elegante para uso diario.",
            image: "../images/orange-hoodie.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "hoodie",
            showInHome: true
        },
        {
            id: 2,
            name: "Pantalón Negro",
            price: "40",
            description: "Pantalón negro ideal para cualquier ocasión.",
            image: "../images/black-pants.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "pants",
            showInHome: true
        },
        {
            id: 3,
            name: "Zapatillas Blancas",
            price: "60",
            description: "Zapatillas blancas cómodas y modernas.",
            image: "../images/white-sneakers.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "sneakers",
            showInHome: true
        },
        {
            id: 4,
            name: "Gorra Roja",
            price: "20",
            description: "Gorra roja para complementar cualquier outfit.",
            image: "../images/red-cap.jpg",
            category: "cap",
            showInHome: true
        },
        {
            id: 5,
            name: "Sudadera Azul",
            price: "50",
            description: "Sudadera azul para un look relajado.",
            image: "../images/blue-hoodie.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "hoodie",
            showInHome: false
        },
        {
            id: 6,
            name: "Pantalón Azul",
            price: "40",
            description: "Pantalón azul para un estilo moderno.",
            image: "../images/blue-pants.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "pants",
            showInHome: false
        },
        // Productos adicionales que no se mostrarán en home
        {
            id: 7,
            name: "Sudadera Verde",
            price: "50", 
            description: "Sudadera verde para un look vibrante.",
            image: "../images/green-hoodie.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "hoodie",
            showInHome: false
        },
        {
            id: 8,
            name: "Pantalón Gris",
            price: "40", 
            description: "Pantalón gris para un estilo casual.",
            image: "../images/gray-pants.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "pants",
            showInHome: false
        },
        {
            id: 9,
            name: "Zapatillas Rojas",
            price: "60", 
            description: "Zapatillas rojas cómodas y modernas.",
            image: "../images/red-sneakers.jpg",
            sizes: ["S", "M", "L", "XL"],
            category: "sneakers",
            showInHome: false
         }
    ];

    // Guardar productos en localStorage
    localStorage.setItem('products', JSON.stringify(products));

    // Seleccionar el contenedor donde se mostrarán los productos
    const productsContainer = document.getElementById('productsContainer');

    // Filtrar los productos que se deben mostrar en home
    const homeProducts = products.filter(product => product.showInHome);

    // Recorre los productos filtrados y crea las cards
    homeProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="viewProduct(${product.id})">Ver Producto</button>
        `;
        productsContainer.appendChild(productCard);
    });
});

// Función para redirigir a la página de detalles del producto
function viewProduct(id) {
    localStorage.setItem('selectedProductId', id);
    window.location.href = 'product.html';
}

function goToProfile() {
    window.location.href = 'profile.html';
}
