// include-header.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and include the header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
});
