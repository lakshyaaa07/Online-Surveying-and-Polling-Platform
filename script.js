
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('bd-theme');
    const themeText = document.getElementById('bd-theme-text');

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';

        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeText.textContent = `Toggle theme (${newTheme})`;
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        themeText.textContent = `Toggle theme (${savedTheme})`;
    }
});

    

