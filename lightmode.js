document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const root = document.documentElement;
    const body = document.body;

    // Controlla se c'è una preferenza salvata nel Local Storage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        themeSwitch.checked = true;
        applyLightMode();
    } else {
        themeSwitch.checked = false;
        applyDarkMode();
    }

    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            applyLightMode();
            localStorage.setItem('theme', 'light'); // Salva la preferenza light mode
        } else {
            applyDarkMode();
            localStorage.setItem('theme', 'dark'); // Salva la preferenza dark mode
        }
    });

    function applyLightMode() {
        root.style.setProperty('--primary-color', '#4A4A74');
        root.style.setProperty('--secondary-color', '#545454');
        root.style.setProperty('--background-color', '#F0F0F5');
        root.style.setProperty('--accent1-color', '#8D8DA6');
        root.style.setProperty('--accent2-color', '#B0B0C0');
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    function applyDarkMode() {
        root.style.setProperty('--primary-color', '#B7B5E4');
        root.style.setProperty('--secondary-color', '#847979');
        root.style.setProperty('--background-color', '#0C0C0F');
        root.style.setProperty('--accent1-color', '#BBC2E2');
        root.style.setProperty('--accent2-color', '#CFCCD6');
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    }
});