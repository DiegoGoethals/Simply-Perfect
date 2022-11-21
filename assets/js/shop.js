"use strict";

init();

function init() {
    const title = localStorage.getItem("active");
    document.querySelector("title").innerHTML = title;
    fillShop(title);
}

function fillShop(type) {
    if (type.substring(type.length - 2) === "en") {
        type = type.substring(0, type.length - 2);
    } else if (type.substring(type.length - 1) === "s") {
        type = type.substring(0, type.length - 1);
    }
    fetchFromServer(`${_config.URL}/products/${type}`, "GET").then(result => {
        const shop = document.getElementById("main");
        result.forEach(item => {
            shop.insertAdjacentHTML("beforeend", `<div class="shopItem">
                <p>${item.name}</p>
                <p>${item.price}</p>
            </div>`);
        });
    });
}