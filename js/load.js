(function() {
    function calculateLoadTime() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return loadTime;
    }
    function displayStatistics(loadTime) {
        const footer = document.createElement('footer');
        footer.textContent = `Load time ${loadTime} milliseconds.`;
        document.body.appendChild(footer);
    }

    window.addEventListener('load', function() {
        const loadTime = calculateLoadTime();
        displayStatistics(loadTime);
    });
})();