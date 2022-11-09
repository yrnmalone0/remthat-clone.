const nav = document.querySelector('nav');
const hamburgerMenu = document.querySelector('.mobile-hamburger')
const exitButton = document.querySelector('.mobile-exit-button')

hamburgerMenu.addEventListener('click', function(){
    nav.classList.add('menu-btn');
})

exitButton.addEventListener('click', function(){
    nav.classList.remove('menu-btn');
})