const isAuthorized = localStorage.getItem('isAuthorized') === 'true';

const signUpSignInButton = document.getElementById('unauthorized-button');
const profileButton = document.getElementById('authorized-button');

if (isAuthorized) {
    signUpSignInButton.style.display = 'none';
    profileButton.style.display = 'inline-block';
} else {
    signUpSignInButton.style.display = 'inline-block';
    profileButton.style.display = 'none';
}

function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '1234' && password === '1234') {
        localStorage.setItem('isAuthorized', 'true');
        window.location.href = '/lab1/index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function logoutForm() {
    localStorage.setItem('isAuthorized', 'false');
    window.location.href = '/lab1/login_page.html';

}