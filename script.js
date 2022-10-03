const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const li = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    li.classList.toggle('slide');
});