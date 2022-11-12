"use strict";

init();

function init() {
    createFooter();
}

function createFooter() {
    const contactInfo = `<div id="contactInfo"><h1>CONTACT INFO</h1><p>&nbsp;</p><span>📍 Generaal Lemanlaan 100 / 8310 Assebroek</span>
                           <span>🕚 MA-ZA 9u30 - 22u</span>
                           <a href="mailto:info@simplyperfectaccesoires.be">✉️ info@simplyperfectaccesoires.be</a><p>&nbsp;</p>
                           </div>`;
    document.querySelector("footer").insertAdjacentHTML("afterbegin", contactInfo);
}