"use strict";

init();

function init() {
    document.querySelector("title").innerHTML = localStorage.getItem("active");
}