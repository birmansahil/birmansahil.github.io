const productDetails = document.querySelector(".product-details");

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('product-id'));

fetch("products.json").then((response) => {
    return response.json();
}).then(data => {
    const product = data.find(product => product.id == productId)
    
    productDetails.innerHTML += `
    <img src=${product.imageSource} alt=${product.imageAlt} />

    <div class="product-meta">
        <h2>${product.name} by ${product.student}</h2>
        <h3>${product.price}</h3>

        <h4>Description</h4>
        <p>${product.description}</p>

        <h4>Features<h4>
        <ul>
            <li>${product.features[0]}</li>
            <li>${product.features[1]}</li>
            <li>${product.features[2]}</li>
        </ul>

        <h4>Dimensions</h4>
        <p>${product.dimensions}</p>

        <button onclick="addToCart(${product.id})">Add to cart</button>
    </div>
    `
})