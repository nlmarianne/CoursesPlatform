class Header extends HTMLElement {
    constructor() {
        super();
    }




    connectedCallback()
    {
        this.innerHTML = '<header>\n' +
            '            <nav>\n' +
            '                <button class="burger-button" id="burger-menu">&#9776; Menu</button>\n' +
            '\n' +
            '                <ul class="navigation-bar">\n' +
            '                    <li class="navigation-bar-option">\n' +
            '                        <div class="dropdown">\n' +
            '                            <button class="drop-button">Subjects</button>\n' +
            '                            <div class="dropdown-content">\n' +
            '                                <a href="#" class="simple-link">Programming</a>\n' +
            '                                <a href="#" class="simple-link">Data Analysis</a>\n' +
            '                                <a href="#" class="simple-link">Languages</a>\n' +
            '                                <a href="#" class="simple-link">Arts</a>\n' +
            '                                <a href="#" class="simple-link">Biology</a>\n' +
            '                                <a href="#" class="simple-link">Chemistry</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </li>\n' +
            '                    <li class="navigation-bar-option">\n' +
            '                        <div class="dropdown">\n' +
            '                            <button class="drop-button">Schools</button>\n' +
            '                            <div class="dropdown-content">\n' +
            '                                <a href="#" class="simple-link">ITMO</a>\n' +
            '                                <a href="#" class="simple-link">MIT</a>\n' +
            '                                <a href="#" class="simple-link">EPITECH</a>\n' +
            '                                <a href="#" class="simple-link">Sorbonne</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </li>\n' +
            '                    <li class="navigation-bar-option">\n' +
            '                        <div class="dropdown">\n' +
            '                            <button class="drop-button">Addition info</button>\n' +
            '                            <div class="dropdown-content">\n' +
            '                                <a href="#" class="simple-link">About us</a>\n' +
            '                                <a href="#" class="simple-link">Customer support</a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </li>\n' +
            '\n' +
            '                    <li class="navigation-bar-option">\n' +
            '                        <a href="login_page.html">\n' +
            '                            <button class="nav-button" id="unauthorized-button">Sign up/Sign in</button>\n' +
            '                        </a>\n' +
            '                    </li>\n' +

            '                    <li class="navigation-bar-option">\n' +
            '                        <a href="profile.html">\n' +
            '                            <button class="register-button" id="authorized-button">Profile</button>\n' +
            '                        </a>\n' +
            '                    </li>\n' +
            '<li class="navigation-bar-option">\n' +
            '                        <a href="index.html">\n' +
            '                            <button class="nav-button">Main page</button>\n' +
            '                        </a>\n' +
            '                    </li>\n' +
            '                    <li class="navigation-bar-option">\n' +
            '                        <form class="search-form" action="/search" method="get">\n' +
            '                            <label>\n' +
            '                                <input type="text" name="search" placeholder="Search...">\n' +
            '                            </label>\n' +
            '                        </form>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </nav>\n' +
            '            <div class="logo-button">\n' +
            '                <a href="index.html"><img src="images/logos/Kitten.png" alt="NLM" class="logo-button"></a>\n' +
            '            </div>\n' +
            '        </header>';
    }
}


customElements.define('header-component', Header);
