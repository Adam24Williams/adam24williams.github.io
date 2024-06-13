document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const themeToggle = document.getElementById('theme-toggle');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    fetch('notes.md')
        .then(response => response.text())
        .then(text => {
            content.innerHTML = marked(text);
        });
});
