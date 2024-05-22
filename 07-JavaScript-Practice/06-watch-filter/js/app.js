import { data } from "../data/data.js"
console.log(data);

let searchInp = document.getElementById("search");
let catContainer = document.querySelector(".cats");
let priceRange = document.querySelector(".priceRange");
let priceValue = document.querySelector(".priceValue");
let productsContainer = document.querySelector(".products");

const displayProducts = (filteredData) => {

    let showFilteredProducts = filteredData.map((product) => // map fonksiyonu yeni bir array dondurur
    `
    <div class="product">
        <img src="${product.img}" alt="">
        <span class="name">${product.name}</span>
        <span class="price">$ ${product.price}</span>
    </div>
    `).join("")

    productsContainer.innerHTML = showFilteredProducts
}

displayProducts(data)

//!search islemi yapilacak

searchInp.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase().trim() // trim bosaltir

    if (value) {
        displayProducts(data.filter((item)=>item.name.toLowerCase().includes(value)))
    }
    else {
        displayProducts(data)
    }

})