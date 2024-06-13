// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const addToCartButtons = document.querySelectorAll('.product-item button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.querySelector('h4').textContent;
            const productPrice = parseFloat(this.parentNode.querySelector('p:last-child').textContent.replace('Preço: R$ ', ''));
            addToCart(productName, productPrice);
        });
    });

    const checkoutButton = document.querySelector('#cart button');
    checkoutButton.addEventListener('click', function() {
        checkout();
    });
});

let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    displayCart();
    
    // Mostrar o ícone do carrinho se houver itens no carrinho
    const cartIcon = document.getElementById('cart-icon');
    if (cart.length > 0) {
        cartIcon.style.display = 'inline'; // Mostra o ícone do carrinho
    }
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price * item.quantity} (${item.quantity}x)`;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function checkout() {
    alert('Compra finalizada com sucesso!');
    cart = [];
    displayCart();
}
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    displayCart();
    
    // Mostrar o ícone do carrinho se houver itens no carrinho
    const cartIcon = document.getElementById('cart-icon');
    if (cart.length > 0) {
        cartIcon.style.display = 'inline'; // Mostra o ícone do carrinho
    }
}