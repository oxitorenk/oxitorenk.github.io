document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');

    // State
    let _theme = 'dark'; // Default

    function loadState() {
        const saved = localStorage.getItem('hub_theme');
        if (saved) {
            _theme = saved;
        }
        applyTheme();
    }

    function saveState() {
        localStorage.setItem('hub_theme', _theme);
    }

    function toggleTheme() {
        _theme = _theme === 'dark' ? 'light' : 'dark';
        saveState();
        applyTheme();
    }

    function applyTheme() {
        const isLight = _theme === 'light';
        if (isLight) {
            document.body.setAttribute('data-theme', 'light');
            // Moon Icon
            themeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
            // Update meta theme color
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#F2F2F7');
        } else {
            document.body.removeAttribute('data-theme');
            // Sun Icon
            themeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
            // Update meta theme color
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
        }
    }

    // Init
    loadState();

    // Listeners
    themeBtn.addEventListener('click', toggleTheme);
});
