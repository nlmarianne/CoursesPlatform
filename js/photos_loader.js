document.addEventListener('DOMContentLoaded', () => {
    const loadPhotosButtonTop = document.getElementById('loadPhotosButton');
    const photosContainer = document.getElementById('photosContainer');
    let photoIndex = 0;
    const photosPerPage = 10;

    loadPhotosButtonTop.addEventListener('click', () => {
        fetchPhotos();
    });

    function fetchPhotos() {
        let randomStart = Math.floor(Math.random() * 100);
        fetch(`https://jsonplaceholder.typicode.com/photos?_start=${randomStart}&_limit=${photosPerPage}`)
            .then(response => response.json())
            .then(data => {
                displayPhotos(data);
                photoIndex += photosPerPage;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayErrorMessage();
            });
    }

    function displayPhotos(photos) {
        photos.forEach(photo => {
            const photoBox = document.createElement('div');
            photoBox.className = 'photo-box';

            const photoTitle = document.createElement('h3');
            photoTitle.className = 'photo-box-title';
            photoTitle.textContent = photo.title;
            photoBox.appendChild(photoTitle);

            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            photoBox.appendChild(spinner);

            const photoImg = new Image();
            photoImg.onload = function() {
                spinner.remove();
                photoBox.appendChild(photoImg);
            };
            photoImg.src = photo.thumbnailUrl;
            photoImg.alt = photo.title;

            photosContainer.appendChild(photoBox);
        });
    }
    function displayErrorMessage() {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = '⚠ Something went wrong';

        const closeButton = document.createElement('button');
        closeButton.className = 'error-close-button';
        closeButton.textContent = 'X';

        closeButton.onclick = function() {
            errorMessage.remove();
        };

        errorMessage.appendChild(closeButton);
        photosContainer.appendChild(errorMessage);
    }
});
