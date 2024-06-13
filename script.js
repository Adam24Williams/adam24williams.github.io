document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const themeToggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('icon');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        icon.textContent = theme === 'dark' ? '🌜' : '🌞';
    }

    if (userPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    fetch('notes.md')
        .then(response => response.text())
        .then(text => {
            content.innerHTML = marked(text);
        });
});
