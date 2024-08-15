document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginLink = document.getElementById('loginLink');
    const medicalsLink = document.getElementById('medicalsLink');
    const cartLink = document.getElementById('cartLink');
    const logoutLink = document.getElementById('logoutLink');
    const loginSection = document.getElementById('login');
    const medicalsSection = document.getElementById('medicals');
    const cartSection = document.getElementById('cart');
    const medicalsContainer = document.getElementById('medicalsContainer');
    const cartList = document.getElementById('cartList');

    let cart = [];
    let loggedIn = false;

    const medicals = [
        'Aspirin', 'Paracetamol', 'Cough Syrup', 'Antibiotics', 'Antihistamines', 
        'Insulin', 'Ibuprofen', 'Vitamin C', 'Omeprazole', 'Loratadine',
        'Antacids', 'Antifungal Cream', 'Cold Relief', 'Pain Relief', 'Calcium', 
        'Iron Supplements', 'Zinc Tablets', 'Allergy Relief', 'Ginger Capsules', 
        'Multivitamins', 'Probiotics'
    ];

    function showSection(section) {
        loginSection.style.display = 'none';
        medicalsSection.style.display = 'none';
        cartSection.style.display = 'none';
        section.style.display = 'block';
    }

    function updateNavBar() {
        if (loggedIn) {
            loginLink.style.display = 'none';
            medicalsLink.style.display = 'inline';
            cartLink.style.display = 'inline';
            logoutLink.style.display = 'inline';
        } else {
            loginLink.style.display = 'inline';
            medicalsLink.style.display = 'none';
            cartLink.style.display = 'none';
            logoutLink.style.display = 'none';
        }
    }

    function loadMedicals() {
        medicalsContainer.innerHTML = '';
        medicals.forEach(medical => {
            const button = document.createElement('button');
            button.textContent = medical;
            button.onclick = () => addToCart(medical);
            medicalsContainer.appendChild(button);
        });
    }

    function addToCart(medical) {
        cart.push(medical);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartList.appendChild(li);
        });
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Dummy login logic
        loggedIn = true;
        showSection(medicalsSection);
        updateNavBar();
        loadMedicals();
    });

    logoutLink.addEventListener('click', () => {
        loggedIn = false;
        showSection(loginSection);
        updateNavBar();
    });

    showSection(loginSection);  // Show login section initially
});
