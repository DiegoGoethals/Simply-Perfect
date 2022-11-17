"use strict";

init();

function init() {
    createHeader();
    document.querySelectorAll("nav > *").forEach(element => {
        element.addEventListener("click", setActive);
        element.addEventListener("click", activeClick);
    });
    initActive();
}

function createHeader() {
    document.querySelector("header").insertAdjacentHTML("afterbegin",
        `<ul id="headerText">
                <li><i class="fa-solid fa-check"></i>Gratis verzendkosten vanaf 40 euro.</li>
            </ul>
            <img src="assets/images/logo.webp" alt="logo">
            <nav><a href="index.html"><p>Home</p></a>
            <div class="dropDown">
                <a href="koordjes.html"><span>Koordjes</span></a>
                <ul id="Koordjes">
                    <li><a href="shop.html">Speenkoorden</a></li>
                    <li><a href="shop.html">Bijtringen</a></li>
                    <li><a href="shop.html">Tashangers</a></li>
                    <li><a href="shop.html">Jaszippers</a></li>
                    <li><a href="shop.html">Popje van geluk</a></li>
                </ul>
            </div>
            <a href="shop.html"><p>Sleutelhangers</p></a>
            <a href="shop.html"><p>Setjes</p></a>
            <div class="dropDown">
                <a href="shop.html"><span>Accesoires</span></a>
                <ul id="Accesoires">
                    <li><a href="shop.html">Armbanden</a></li>
                    <li><a href="shop.html">Kettingen</a></li>
                </ul>
            </div>
            <div class="dropDown">
                <a href="shop.html"><span>Cadeautjes</span></a>
                <ul id="Cadeautjes">
                    <li><a href="shop.html">Meter en Peter</a></li>
                    <li><a href="shop.html">Mama en Papa</a></li>
                    <li><a href="shop.html">Kralenpennen</a></li>
                </ul>
            </div>
            <a href="shop.html"><p>Onderzetters</p></a>
            <a href="william.html"><p>VZW VOOR WILLIAM</p></a>
            <div id="icons">
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
        </nav>`);
}

function setActive(e) {
    document.querySelectorAll("nav *").forEach(element => {
        element.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.tagName === "LI") {
        e.target.parentElement.parentElement.children[0].classList.add("active");
    }
}

function initActive() {
    const title = document.querySelector("title").innerHTML;
    if (title === "Simply Perfect Accesoires") {
        document.querySelector(" nav p").classList.add("active");
    } else {
        document.querySelectorAll("nav *").forEach(element => {
            if (element.innerHTML === title) {
                element.classList.add("active");
                if (element.parentElement.tagName === "LI") {
                    element.parentElement.parentElement.parentElement.children[0].classList.add("active");
                }
            }
        });
    }
}

function activeClick(e) {
    localStorage.setItem("active", e.target.innerHTML);
}