document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('#hamburger_menu');
    const menu = document.querySelector('.menu')
    const close = document.querySelector('#close')
    hamburger.onclick = function () {
        hamburger.style.display = 'none';
        menu.style.display = 'flex';
        document.body.style.backgroundColor = 'hsl(236, 13%, 42%, 0.5)';
    }
    close.onclick = function () {
        menu.style.display = 'none';
        hamburger.style.display = 'block';
        document.body.style.backgroundColor = 'inherit';
    }
});