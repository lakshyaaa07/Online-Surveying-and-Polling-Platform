function changeTheme() {
    const themeSelect = document.getElementById('theme-select');
    const themeLink = document.getElementById('theme-link');

    // Get the selected theme file from the dropdown
    const selectedTheme = themeSelect.value;

    // Update the theme stylesheet link to the selected theme
    themeLink.href = selectedTheme;
}

// Call changeTheme() initially to apply the default theme
changeTheme();
