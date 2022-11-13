"use strict";

init();

function init() {
    createHeader();
    document.querySelectorAll("nav > *").forEach(element => {
        element.addEventListener("click", setActive);
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
                    <li>Speenkoorden</li>
                    <li>Bijtringen</li>
                    <li>Tashangers</li>
                    <li>Jaszippers</li>
                    <li>Popje van geluk</li>
                </ul>
            </div>
            <p>Sleutelhangers</p><p>Setjes</p>
            <div class="dropDown">
                <span>Accesoires</span>
                <ul id="Accesoires">
                    <li>Armbanden</li>
                    <li>Kettingen</li>
                </ul>
            </div>
            <div class="dropDown">
                <span>Cadeautjes</span>
                <ul id="Cadeautjes">
                    <li>Meter en Peter</li>
                    <li>Mama en Papa</li>
                    <li>Kralenpennen</li>
                </ul>
            </div>
            <div class="dropDown">
                <span>Epoxy</span>
                <ul id="Epoxy">
                    <li>Sleutelhangers</li>
                    <li>Onderzetters</li>
                </ul>
            </div>
            <p>VZW VOOR WILLIAM</p>
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
                if (element.tagName === "LI") {
                    element.parentElement.parentElement.children[0].classList.add("active");
                }
            }
        });
    }
}