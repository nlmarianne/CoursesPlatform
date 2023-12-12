(function() {
    function getCurrentPath() {
        return window.location.pathname;
    }

    function highlightCurrentPage() {
        const currentPath = getCurrentPath();
        const links = document.querySelectorAll('.navigation-bar-option a');

        links.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            const parentNode = link.parentNode;

            if (linkPath === currentPath) {
                parentNode.classList.add('active');
            } else if (parentNode) {
                parentNode.classList.remove('active');
            }
        });
    }

    window.addEventListener('load', highlightCurrentPage);
})();