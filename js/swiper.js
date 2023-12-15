document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper
    new Swiper('.swiper-container', {
        // Enable continuous loop mode
        loop: true,
        // Configure navigation with buttons
        navigation: {
            // Set the previous button element
            prevEl: '.swiper-button-prev',
            // Set the next button element
            nextEl: '.swiper-button-next'
        },
        // Configure pagination
        pagination: {
            // Set the pagination element
            el: ".swiper-pagination",
            // Make the pagination bullets clickable
            clickable: true,
            // Customize rendering for each pagination bullet
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
});
