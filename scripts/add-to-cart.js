const notification = document.querySelector(".notification");

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (cart.find((item) => item == productId)) {
        notification.innerHTML = `<p>Item already in cart</p>`;
        showNotification();
        setTimeout(hideNotification, 2000)
    } else {
        cart.push(productId);
        notification.innerHTML = `<p>Item added to cart</p>`;
        showNotification();
        setTimeout(hideNotification, 2000)
    }
    
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function showNotification() {
    notification.classList.add("show");
}

function hideNotification() {
    notification.classList.remove("show");
}