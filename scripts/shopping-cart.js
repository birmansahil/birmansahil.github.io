const cartProducts = document.querySelector(".cart-products");
const cartTotal = document.querySelector(".cart-total");

let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

function renderCart() {
    fetch("products.json").then((response) => {
        return response.json();
    }).then(data => {
        const products = data.filter(product => cart.includes(product.id));
        total = 0;

        products.map(product => {
            cartProducts.innerHTML += `
            <tr>
                <td><img src=${product.imageSource} alt=${product.imageAlt} /> ${product.name} by ${product.student}</td>
                <td><button class="remove-item-btn" onclick="removeItem(${product.id})">Remove Item</button></td>
                <td>$${product.price}</td>
            </tr>
            `
            total += parseFloat(product.price);
        })

        cartTotal.textContent = `$${total}`;
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