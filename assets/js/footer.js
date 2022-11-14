"use strict";

init();

function init() {
    createFooter();
}

function createFooter() {
    const contactInfo = `<div id="contactInfo"><h1>CONTACT INFO</h1><p>&nbsp;</p><span>📍 Generaal Lemanlaan 100 / 8310 Assebroek</span>
                           <span>🕚 MA-ZA 9u30 - 22u</span>
                           <a href="mailto:info@simplyperfectaccesoires.be">✉️ info@simplyperfectaccesoires.be</a><p>&nbsp;</p>
                           </div>
                            <div>
                                <a id="facebook" href="https://www.facebook.com/profile.php?id=100085311411092" target="_blank">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a id="instagram" href="https://instagram.com/simply_perfect_accessoires_ag/" target="_blank">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </a>
                            </div>
                            <div id="contributors"><p>© 2022 SimplyPerfectAccesoires</p>
                            <em>Website made by <a id="diego" href="https://www.diegogoethals.be/" target="_blank">Diego Goethals</a></em></div>`;
    document.querySelector("footer").insertAdjacentHTML("afterbegin", contactInfo);
}