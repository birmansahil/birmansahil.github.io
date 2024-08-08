const productsGrid = document.querySelector(".products-grid");

fetch("products.json").then((response) => {
    return response.json();
}).then(data => {
    data.map(product => {
        productsGrid.innerHTML += `
        <div class="product" onclick="location.href='product-details.html?product-id='+${product.id}">
            <img src=${product.imageSource} alt=${product.imageAlt} />
            
            <div class="product-meta">
                <p>${product.name} <br /><span>by ${product.student}<span></p>
                <p>${product.price}</p>
            </div>
        </div>
        `
    })
})