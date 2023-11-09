(function() {
    function getCurrentPath() {
        return document.location.pathname;
    }

    function highlightCurrentPage() {
        const currentPath = getCurrentPath();
        const links = document.querySelectorAll('.navigation-bar-option a');

        links.forEach(link => {
            const linkPath = link.getAttribute('href');
            const parentNode = link.parentNode;
            console.log(parentNode);

            if ('/lab1/' + linkPath === currentPath) {

                parentNode.classList.add('active');
            } else if (parentNode) {
                parentNode.classList.remove('active');
            }
        });
    }

    window.addEventListener('load', highlightCurrentPage);
})();