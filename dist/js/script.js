window.onscroll = function () {
    const header = document.querySelector('header');
    const top = document.querySelector('#top');
    const fixedNav = header.offsetTop;


    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        top.classList.remove('flex');
        top.classList.add('hidden');
    }
}

const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});


window.addEventListener('click', function(e) {
    if(e.target != humberger &&  e.target != navMenu) {
        humberger.classList.remove('humberger-active');
        navMenu.classList.add('hidden')
    }
})