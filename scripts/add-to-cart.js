function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    if (cart.find((item) => item == productId)) {
        console.log("item already in cart");
    } else {
        cart.push(productId);
        console.log("item added to cart");
    }
    
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}