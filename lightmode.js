document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const root = document.documentElement;
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            // Light mode with softer colors
            root.style.setProperty('--primary-color', '#5D5D8D');
            root.style.setProperty('--secondary-color', '#7A7A7A');
            root.style.setProperty('--background-color', '#F0F0F5');
            root.style.setProperty('--accent1-color', '#8D8DA6');
            root.style.setProperty('--accent2-color', '#B0B0C0');
        } else {
            // Dark mode (original colors)
            root.style.setProperty('--primary-color', '#B7B5E4');
            root.style.setProperty('--secondary-color', '#847979');
            root.style.setProperty('--background-color', '#0C0C0F');
            root.style.setProperty('--accent1-color', '#BBC2E2');
            root.style.setProperty('--accent2-color', '#CFCCD6');
        }
    });
});
