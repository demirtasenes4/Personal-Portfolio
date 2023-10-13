const languageSwitch = document.getElementById('language-switch');

languageSwitch.addEventListener('click', function () {
    const currentPage = window.location.pathname;
    const targetPage = currentPage.includes('indextr.html') ? 'index.html' : 'indextr.html';
    window.location.href = targetPage;
});

setTimeout(function () {
    const text = document.querySelector('.reveal-text');
    text.classList.add('reveal');
}, 2000);