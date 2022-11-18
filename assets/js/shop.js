"use strict";

init();

function init() {
    document.querySelector("title").innerHTML = localStorage.getItem("active");
    fillShop();
}

function fillShop() {
    fetchFromServer(`${_config.URL}/products`, "GET").then(result => {
        console.log(result);
    });
}