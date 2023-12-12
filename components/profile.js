class Profile extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback()
    {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML =
'<div class="profile-content">\n' +
            '<div class="main-info-table">' +
            '    <div class="label">Username:</div>\n' +
            '    <div class="value"><slot name="username"></slot></div>\n' +
            '\n' +
            '    <div class="label">E-mail address:</div>\n' +
            '    <div class="value"><slot name="email"></slot></div>\n' +
            '\n' +
            '    <div class="label">Subscription type:</div>\n' +
            '    <div class="value"><slot name="subscription"></slot></div>\n' +
            '\n' +
            '    <div class="label">With us since:</div>\n' +
            '    <div class="value"><slot name="user-history"></slot></div>\n' +
            '    <div class="label">Schedule:</div>\n' +
            '    <div class="value"><slot name="schedule"></slot></div>\n' +
            '\n' +
            '\n' +
            '<div class="bottom-section">\n' +
            '<div class="bottom-section-content">' +
            '    <button class="logout" onclick="toggleLogoutBox()">Logout</button>\n' +
            '</div>' +
            '</div>'+
            '<div id="overlay" onclick="toggleLogoutBox()">\n' +
            '        <div id="logout-box" class="box">\n' +
            '            <div class="logout-form">\n' +
            '                <h2>Are you sure you want to log out?</h2>\n' +
            '                <input class="logout-button" type="submit" onclick="logoutForm()" value="Yes, I want to logout">\n' +
            '<input class="not-logout-button" type="submit" onclick="closeLogoutForm(event)" value=" No, I don\'t want to logout">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'css/profile.css');
        this.shadowRoot.appendChild(linkElem);
    }


}


customElements.define('profile-component', Profile);


function toggleLogoutBox() {
    const logoutBox = document.querySelector('profile-component').shadowRoot.getElementById('logout-box');
    const overlay = document.querySelector('profile-component').shadowRoot.getElementById('overlay');
    logoutBox.style.display = 'block';
    logoutBox.style.width = '310px';
    overlay.style.display = 'flex';
}
function closeLogoutForm(event) {
    if (event) {
        event.stopPropagation();
    }
    const logoutBox = document.querySelector('profile-component').shadowRoot.getElementById('logout-box');
    const overlay = document.querySelector('profile-component').shadowRoot.getElementById('overlay');
    logoutBox.style.display = 'none';
    overlay.style.display = 'none';
}