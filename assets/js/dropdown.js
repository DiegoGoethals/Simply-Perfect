"use strict";

init();

function init() {
    document.querySelectorAll("nav > *").forEach( item => {
        item.addEventListener("mouseover", openMenu);
    });
}

function openMenu(e) {
    document.querySelectorAll("ul").forEach(ul => {
        if (ul !== document.getElementById(e.target.innerText) && ul.style.display !== "none") {
            if (!(e.currentTarget === ul.parentElement)) {
                closeMenu(ul);
            }
        }
    });
    if (document.getElementById(e.target.innerText)) {
        document.getElementById(e.target.innerText).style.display = "block";
    }
}

function closeMenu(ul) {
    ul.style.display = "none";
}