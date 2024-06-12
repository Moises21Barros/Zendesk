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
    cart.push({ name: productName, price: productPrice });
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function checkout() {
    alert('Compra finalizada com sucesso!');
    cart = [];
    displayCart();
}