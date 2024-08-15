const cartProducts = document.querySelector(".cart-products");

let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

function renderCart() {
    fetch("products.json").then((response) => {
        return response.json();
    }).then(data => {
        const products = data.filter(product => cart.includes(product.id));
    
        products.map(product => {
            cartProducts.innerHTML += `
            <tr>
                <td><img src=${product.imageSource} alt=${product.imageAlt} /> ${product.name}</td>
                <td><button class="remove-item-btn" onclick="removeItem(${product.id})">Remove Item</button></td>
                <td>${product.price}</td>
            </tr>
            `
        })
    })
}

function removeItem(productId) {
    console.log("you have requested to remove", productId);
    cart = cart.filter(itemId => itemId !== productId);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    cartProducts.innerHTML = ``
    renderCart();
}

renderCart();