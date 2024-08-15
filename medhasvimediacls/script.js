document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Aspirin', price: 5.00 },
        { id: 2, name: 'Cough Syrup', price: 7.50 },
        { id: 3, name: 'Bandages', price: 2.00 },
        { id: 4, name: 'Antibiotic Cream', price: 6.00 }
    ];

    const productList = document.getElementById('products');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    let cart = [];

    function updateProductList() {
        productList.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${product.name} - $${product.price.toFixed(2)}
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(li);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(product => {
            const li = document.createElement('li');
            li.innerText = `${product.name} - $${product.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += product.price;
        });
        totalElement.innerText = `Total: $${total.toFixed(2)}`;
    }

    updateProductList();
});
