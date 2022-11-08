"use strict";

init();

function init() {
    document.querySelectorAll("span").forEach( item => {
        item.addEventListener("mouseover", openMenu);
    });
}

function openMenu(e) {
    document.querySelectorAll("ul").forEach(ul => {
        if (ul !== document.getElementById(e.target.innerText) && ul.style.display !== "none") {
            closeMenu(ul);
        }
    });
    document.getElementById(e.target.innerText).style.display = "block";
}

function closeMenu(ul) {
    ul.style.display = "none";
}