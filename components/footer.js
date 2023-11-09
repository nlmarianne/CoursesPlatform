class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback()
    {
        this.innerHTML = '<footer>\n' +
            '            <div class="footer-content">\n' +
            '            <section class="partners">\n' +
            '                <h2>Our partners</h2>\n' +
            '                <ul class="partners-list">\n' +
            '                    <li class="partners-logo">\n' +
            '                        <img src="images/logos/itmo.png" alt="ITMO" class="partner-logo">\n' +
            '                    </li>\n' +
            '                    <li class="partners-logo">\n' +
            '                        <img src="images/logos/mit.png" alt="MIT" class="partner-logo">\n' +
            '                    </li>\n' +
            '                    <li class="partners-logo">\n' +
            '                        <img src="images/logos/epitech.png" alt="EPITECH" class="partner-logo">\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </section>\n' +
            '            </div>\n' +
            '        </footer>';
    }
}


customElements.define('footer-component', Footer);
