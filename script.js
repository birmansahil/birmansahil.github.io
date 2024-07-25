const productsGrid = document.querySelector(".products-grid");
console.log(productsGrid);

fetch("products.json").then((response) => {
    return response.json();
}).then(data => {
    data.map(product => {
        productsGrid.innerHTML += `
        <div class="product">
            <img src=${product.image_source} alt=${product.image_alt} />
            <p>${product.name}</p>
        </div>
        `
    })
})