// loadComponents.js
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Load header and sidebar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'header.html');
    loadComponent('sidebar-container', 'sidebar.html');
});