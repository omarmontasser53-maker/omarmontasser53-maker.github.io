if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateToggleButton();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateToggleButton();
}

function updateToggleButton() {
    const button = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
}